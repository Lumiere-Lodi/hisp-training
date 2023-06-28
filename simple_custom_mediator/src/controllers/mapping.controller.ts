import { RequestHandler } from "express";
import httpStatus from "http-status";

export const mapping: RequestHandler = async (req, res) => {
  const bundle = req.body;

  //POST DATA TO FHIR FOR VALIDATION

  //send to clickhouse
  const patientPayload = {
    id: bundle.entry[0].resource.id,
    patient_name: bundle.entry[0].resource.name,
    patient_gender: bundle.entry[0].resource.gender,
  };

  const conditionPayload = {
    id: bundle.entry[1].fullUrl,
    patient_id: bundle.entry[1].resource.subject.reference,
    encounter_id: bundle.entry[1].resource.encounter.reference,
  };

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    headers: { "content-type": "application/json" },
    body: {
      Patient: {
        ...patientPayload,
      },
      Condition: {
        ...conditionPayload,
      },
    },
  });
};
