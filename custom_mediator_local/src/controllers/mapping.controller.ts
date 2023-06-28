import { RequestHandler } from "express";
import httpStatus from "http-status";
import { postFhirData } from "@server/utils/PostFhirData";
import { ClickHouse } from "clickhouse";

const CLICKHOUSE_HOST = process.env.CLICKHOUSE_HOST ?? "localhost";
const CLICKHOUSE_PORT = parseInt(process.env.CLICKHOUSE_PORT ?? "8124");

const clickhouse = new ClickHouse({
  url: CLICKHOUSE_HOST,
  port: CLICKHOUSE_PORT,
  debug: true,
});

const insertQuery = (tableName: string, data: object) => {
  const filteredData = Object.keys(data).reduce((obj, key) => {
    if(data[key] !== null) {
      obj[key] = data[key];
    }
    return obj  
  }, {})
  return `INSERT INTO ${tableName}(${Object.keys(filteredData).join(", ")}) VALUES('${Object.values(filteredData).join("', '")}')`
};

const loadIntoClickhouse = (tableName, data) => {
  clickhouse.insert(insertQuery(tableName, data)).toPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


}


export const mapping: RequestHandler = async (req, res) => {
  const bundle = req.body;

  //POST DATA TO FHIR FOR VALIDATION
  console.log(`HAPI FHIR URL: ${process.env.FHIR_SERVER_URL}`);

  const response = await postFhirData(
    `${process.env.FHIR_SERVER_URL}/fhir`,
    bundle
  ).catch((error) => {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      headers: { "content-type": "application/json" },
      body: error.message,
    });
  });

  if (response.status == httpStatus.OK) {
    console.log(
      "Your bundle is compliant with the HAPI FHIR specifications and meets all the necessary requirements"
    );

    //send to clickhouse
    const patientPayload = {
      id: bundle.entry[0].resource.id, 
      patient_name: bundle.entry[0].resource.name,
      patient_gender: bundle.entry[0].resource.gender
    }

    loadIntoClickhouse('patient', patientPayload)

    const conditionPayload = {
      id: bundle.entry[1].fullUrl,
      patient_id:bundle.entry[1].resource.subject.reference,
      encounter_id: bundle.entry[1].resource.encounter.reference
    }

    loadIntoClickhouse('condition', conditionPayload)


    return res.status(httpStatus.CREATED).send(bundle);
  } else {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      headers: { "content-type": "application/json" },
      body: "Error in sending resources to FHIR server",
    });
  }

};
