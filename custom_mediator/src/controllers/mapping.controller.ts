import { RequestHandler } from "express";
import httpStatus from "http-status";
import { postFhirData } from "@server/utils/PostFhirData";
import { loadIntoClickhouse } from "@server/utils/clickhouse";

export const mapping: RequestHandler = async (req, res) => {
  const bundle = req.body;

  //POST DATA TO FHIR FOR VALIDATION
  try {
    const response = await postFhirData(
      `${process.env.FHIR_SERVER_URL}/fhir`,
      bundle
    );

    if (response.status == httpStatus.OK) {
      console.log(
        "Your bundle is compliant with the HAPI FHIR specifications and meets all the necessary requirements"
      );

      //send to clickhouse
      const patientPayload = {
        id: bundle.entry[0].resource.id,
        patient_name: bundle.entry[0].resource.name,
        patient_gender: bundle.entry[0].resource.gender,
      };

      loadIntoClickhouse("patient", patientPayload);

      const conditionPayload = {
        id: bundle.entry[1].fullUrl,
        patient_id: bundle.entry[1].resource.subject.reference,
        encounter_id: bundle.entry[1].resource.encounter.reference,
      };

      loadIntoClickhouse("condition", conditionPayload);

      return res.status(httpStatus.CREATED).send(bundle);
    }else{
      console.log(`Your bundle is not valid: ${response.status}`)
    }
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      headers: { "content-type": "application/json" },
      body: `Error sending data to ClickHouse: ${error}`,
    });
  }
};
