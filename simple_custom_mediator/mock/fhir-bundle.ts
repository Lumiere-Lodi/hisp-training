import { Bundle } from 'fhir/r4';

export default {
  resourceType: 'Bundle',
  type: 'transaction',
  entry: [
    {
      resource: {
        active: true,
        id: 'P03647103112',
        identifier: [
          {
            system: 'https://fhir.kemkes.go.id/id/ihs-number',
            use: 'official',
            value: 'P03647103112',
          },
          {
            system: 'https://fhir.kemkes.go.id/id/nik',
            use: 'official',
            value: '################',
          },
        ],
        meta: {
          lastUpdated: '2022-11-19T04:24:51.441479+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Patient'],
          versionId: 'MTY2ODgzMTg5MTQ0MTQ3OTAwMA',
        },
        resourceType: 'Patient',
      },
    },
    {
      fullUrl: 'urn:uuid:344129c6-c42d-4bf6-8a22-e5ac831b2a1d',
      request: {
        method: 'POST',
        url: 'Condition',
      },
      resource: {
        resourceType: 'Condition',
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'active',
              display: 'Active',
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                code: 'encounter-diagnosis',
                display: 'Encounter Diagnosis',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10',
              code: 'A16.3',
              display:
                'Tuberculosis of intrathoracic lymph nodes, without mention bacteriological and histological confirmation',
            },
          ],
        },
        subject: {
          reference: 'Patient/P03647103112',
        },
        encounter: {
          reference: 'urn:uuid:d539e827-7934-43d5-a6a0-1704fcfd8498',
        },
      },
    },
    {
      fullUrl: 'urn:uuid:d539e827-7934-43d5-a6a0-1704fcfd8498',
      request: {
        method: 'POST',
        url: 'Encounter',
      },
      resource: {
        resourceType: 'Encounter',
        identifier: [
          {
            system: 'http://sys-ids.kemkes.go.id/encounter/10080058',
            value: '12345',
          },
        ],
        period: {
          start: '2022-06-14T07:00:00+07:00',
        },
        statusHistory: [
          {
            period: {
              start: '2022-06-14T07:00:00+07:00',
              end: '2022-06-14T07:00:00+07:00',
            },
            status: 'arrived',
          },
          {
            period: {
              start: '2022-06-14T07:00:00+07:00',
              end: '2022-06-14T07:00:00+07:00',
            },
            status: 'in-progress',
          },
          {
            period: {
              start: '2022-06-14T09:00:00+07:00',
              end: '2022-06-14T09:00:00+07:00',
            },
            status: 'finished',
          },
        ],
        status: 'arrived',
        class: {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'AMB',
          display: 'ambulatory',
        },
        subject: {
          reference: 'Patient/P03647103112',
        },
        participant: [
          {
            type: [
              {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                    code: 'ATND',
                    display: 'attender',
                  },
                ],
              },
            ],
            individual: {
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        location: [
          {
            location: {
              reference: 'Location/ef011065-38c9-46f8-9c35-d1fe68966a3e',
            },
          },
        ],
        serviceProvider: {
          reference: 'Organization/10080058',
        },
        diagnosis: [
          {
            condition: {
              reference: 'urn:uuid:344129c6-c42d-4bf6-8a22-e5ac831b2a1d',
            },
            rank: 1,
          },
        ],
        episodeOfCare: [
          {
            reference: 'urn:uuid:07712faf-3eb6-456d-8eb6-2ff2e458cdc7',
          },
        ],
      },
    },
    {
      fullUrl: 'urn:uuid:07712faf-3eb6-456d-8eb6-2ff2e458cdc7',
      request: {
        method: 'POST',
        url: 'EpisodeOfCare',
      },
      resource: {
        resourceType: 'EpisodeOfCare',
        status: 'active',
        type: [
          {
            coding: [
              {
                system: 'http://terminology.kemkes.go.id/CodeSystem/episodeofcare-type',
                code: 'TB-SO',
                display: 'Tuberkulosis Sensitif Obat',
              },
            ],
          },
        ],
        diagnosis: [
          {
            condition: {
              reference: 'urn:uuid:344129c6-c42d-4bf6-8a22-e5ac831b2a1d',
            },
            rank: 1,
          },
        ],
        period: {
          start: '2023-02-02',
        },
        patient: {
          reference: 'Patient/P03647103112',
        },
        careManager: {
          reference: 'Practitioner/N10000001',
        },
        managingOrganization: {
          reference: 'Organization/10080058',
        },
      },
    },
    {
      fullUrl: 'urn:uuid:ecbb7696-cd5c-4fa1-acbd-416bcff8ed83',
      request: {
        method: 'POST',
        url: 'Observation',
      },
      resource: {
        resourceType: 'Observation',
        identifier: [
          {
            system: 'http://sys-ids.kemkes.go.id/observation/10080058',
          },
        ],
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                code: 'laboratory',
                display: 'Laboratory',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '88874-3',
              display:
                'Mycobacterium tuberculosis complex DNA [Presence] in Isolate or Specimen by Molecular genetics method',
            },
          ],
        },
        subject: {
          reference: 'Patient/P03647103112',
        },
        encounter: {
          reference: 'urn:uuid:d539e827-7934-43d5-a6a0-1704fcfd8498',
        },
        issued: '2023-02-02T08:00:00+07:00',
        performer: [
          {
            reference: 'Practitioner/N10000001',
          },
          {
            reference: 'Organization/10080058',
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'rif-res',
            },
          ],
        },
        referenceRange: [
          {
            text: 'Negative',
          },
        ],
      },
    },
    {
      fullUrl: 'urn:uuid:dbd0fd3b-9b4b-46c4-b515-8cf69184af8d',
      request: {
        method: 'POST',
        url: 'Observation',
      },
      resource: {
        resourceType: 'Observation',
        identifier: [
          {
            system: 'http://sys-ids.kemkes.go.id/observation/10080058',
          },
        ],
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                code: 'imaging',
                display: 'Imaging',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '24648-8',
              display: 'XR Chest PA upright',
            },
          ],
        },
        subject: {
          reference: 'Patient/P03647103112',
        },
        encounter: {
          reference: 'urn:uuid:d539e827-7934-43d5-a6a0-1704fcfd8498',
        },
        issued: '2022-02-02T08:00:00+07:00',
        performer: [
          {
            reference: 'Practitioner/N10000001',
          },
          {
            reference: 'Organization/10080058',
          },
        ],
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              code: 'POS',
              display: 'Positive',
            },
          ],
        },
        referenceRange: [
          {
            text: 'Negative',
          },
        ],
      },
    },
    {
      fullUrl: 'urn:uuid:fb14b161-0a09-4d23-9d43-e75f5662da9b',
      request: {
        method: 'POST',
        url: 'QuestionnaireResponse',
      },
      resource: {
        resourceType: 'QuestionnaireResponse',
        questionnaire: 'https://fhir.kemkes.go.id/Questionnaire/Q0001',
        status: 'completed',
        subject: {
          reference: 'Patient/P03647103112',
        },
        encounter: {
          reference: 'urn:uuid:d539e827-7934-43d5-a6a0-1704fcfd8498',
        },
        author: {
          reference: 'Practitioner/N10000001',
        },
        source: {
          reference: 'Patient/P03647103112',
        },
        item: [
          {
            linkId: '3',
            text: 'Klasifikasi tuberkulosis berdasarkan riwayat pengobatan',
            answer: [
              {
                valueCoding: {
                  system: 'http://terminology.kemkes.go.id/CodeSystem/prev-tb-treatment',
                  code: 'relapse',
                },
              },
            ],
          },
          {
            linkId: '4',
            text: 'Hasil akhir pengobatan tuberkulosis',
            answer: [
              {
                valueCoding: {
                  system: 'http://terminology.kemkes.go.id/CodeSystem/tb-outcome-class',
                  code: 'cured',
                },
              },
            ],
          },
        ],
      },
    },
    {
      fullUrl: 'urn:uuid:53ce2272-3467-437b-86e8-42005a571261',
      request: {
        method: 'POST',
        url: 'Medication',
      },
      resource: {
        resourceType: 'Medication',
        status: 'active',
        manufacturer: {
          reference: 'Organization/10080058',
        },
        code: {
          coding: [
            {
              system: 'http://sys-ids.kemkes.go.id/kfa',
              code: '92000716',
              display:
                'Obat Anti Tuberculosis / Rifampicin 150 mg / Isoniazid 75 mg / Pyrazinamide 400 mg / Ethambutol 275 mg Kaplet Salut Selaput',
            },
          ],
        },
        form: {
          coding: [
            {
              system: 'http://terminology.kemkes.go.id/CodeSystem/medication-form',
              code: 'BS077',
              display: 'Tablet Salut Selaput',
            },
          ],
        },
        ingredient: [
          {
            itemCodeableConcept: {
              coding: [
                {
                  system: 'http://sys-ids.kemkes.go.id/kfa',
                  code: '91000330',
                  display: 'Rifampin',
                },
              ],
            },
            isActive: true,
            strength: {
              numerator: {
                value: 150,
                system: 'http://unitsofmeasure.org',
                code: 'mg',
              },
              denominator: {
                value: 1,
                system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                code: 'TAB',
              },
            },
          },
          {
            itemCodeableConcept: {
              coding: [
                {
                  system: 'http://sys-ids.kemkes.go.id/kfa',
                  code: '91000328',
                  display: 'Isoniazid',
                },
              ],
            },
            isActive: true,
            strength: {
              numerator: {
                value: 75,
                system: 'http://unitsofmeasure.org',
                code: 'mg',
              },
              denominator: {
                value: 1,
                system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                code: 'TAB',
              },
            },
          },
          {
            itemCodeableConcept: {
              coding: [
                {
                  system: 'http://sys-ids.kemkes.go.id/kfa',
                  code: '91000329',
                  display: 'Pyrazinamide',
                },
              ],
            },
            isActive: true,
            strength: {
              numerator: {
                value: 400,
                system: 'http://unitsofmeasure.org',
                code: 'mg',
              },
              denominator: {
                value: 1,
                system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                code: 'TAB',
              },
            },
          },
          {
            itemCodeableConcept: {
              coding: [
                {
                  system: 'http://sys-ids.kemkes.go.id/kfa',
                  code: '91000288',
                  display: 'Ethambutol',
                },
              ],
            },
            isActive: true,
            strength: {
              numerator: {
                value: 275,
                system: 'http://unitsofmeasure.org',
                code: 'mg',
              },
              denominator: {
                value: 1,
                system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                code: 'TAB',
              },
            },
          },
        ],
        extension: [
          {
            url: 'http://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType',
            valueCodeableConcept: {
              coding: [
                {
                  system: 'http://terminology.kemkes.go.id/CodeSystem/medication-type',
                  code: 'NC',
                  display: 'Non-compound',
                },
              ],
            },
          },
        ],
      },
    },
    {
      fullUrl: 'urn:uuid:58b81f48-eed2-4f13-9652-f0c46c44b66f',
      request: {
        method: 'POST',
        url: 'Medication',
      },
      resource: {
        resourceType: 'Medication',
        status: 'active',
        manufacturer: {
          reference: 'Organization/10080058',
        },
        code: {
          coding: [
            {
              system: 'http://sys-ids.kemkes.go.id/kfa',
              code: '92000315',
            },
          ],
        },
        form: {
          coding: [
            {
              system: 'http://terminology.kemkes.go.id/CodeSystem/medication-form',
              code: 'BS077',
              display: 'Tablet Salut Selaput',
            },
          ],
        },
        ingredient: [
          {
            itemCodeableConcept: {
              coding: [
                {
                  system: 'http://sys-ids.kemkes.go.id/kfa',
                  code: '91000160',
                  display: 'Lopinavir',
                },
              ],
            },
            isActive: true,
            strength: {
              numerator: {
                value: 200,
                system: 'http://unitsofmeasure.org',
                code: 'mg',
              },
              denominator: {
                value: 1,
                system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                code: 'TAB',
              },
            },
          },
          {
            itemCodeableConcept: {
              coding: [
                {
                  system: 'http://sys-ids.kemkes.go.id/kfa',
                  code: '91000161',
                  display: 'Ritonavir',
                },
              ],
            },
            isActive: true,
            strength: {
              numerator: {
                value: 50,
                system: 'http://unitsofmeasure.org',
                code: 'mg',
              },
              denominator: {
                value: 1,
                system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                code: 'TAB',
              },
            },
          },
        ],
        extension: [
          {
            url: 'http://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType',
            valueCodeableConcept: {
              coding: [
                {
                  system: 'http://terminology.kemkes.go.id/CodeSystem/medication-type',
                  code: 'NC',
                  display: 'Non-compound',
                },
              ],
            },
          },
        ],
      },
    },
    {
      fullUrl: 'urn:uuid:b7c779dd-c387-4482-9a9e-456c6cb2f929',
      request: {
        method: 'POST',
        url: 'MedicationRequest',
      },
      resource: {
        resourceType: 'MedicationRequest',
        status: 'active',
        intent: 'order',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category',
                code: 'outpatient',
                display: 'Outpatient',
              },
            ],
          },
        ],
        priority: 'routine',
        medicationReference: {
          reference: 'urn:uuid:53ce2272-3467-437b-86e8-42005a571261',
        },
        subject: {
          reference: 'Patient/P03647103112',
        },
        encounter: {
          reference: 'urn:uuid:d539e827-7934-43d5-a6a0-1704fcfd8498',
        },
        requester: {
          reference: 'Patient/P03647103112',
        },
        reasonCode: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/sid/icd-10',
                code: 'A15.0',
                display: 'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
              },
            ],
          },
        ],
        dosageInstruction: [
          {
            sequence: 1,
            text: '4 tablet per hari',
            additionalInstruction: [
              {
                text: 'Diminum setiap hari',
              },
            ],
            patientInstruction: '4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir',
            timing: {
              repeat: {
                frequency: 1,
                period: 1,
                periodUnit: 'd',
              },
            },
            route: {
              coding: [
                {
                  system: 'http://www.whocc.no/atc',
                  code: 'O',
                  display: 'Oral',
                },
              ],
            },
            doseAndRate: [
              {
                type: {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/dose-rate-type',
                      code: 'ordered',
                      display: 'Ordered',
                    },
                  ],
                },
                doseQuantity: {
                  value: 4,
                  unit: 'TAB',
                  system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                  code: 'TAB',
                },
              },
            ],
          },
        ],
        dispenseRequest: {
          dispenseInterval: {
            value: 1,
            unit: 'days',
            system: 'http://unitsofmeasure.org',
            code: 'd',
          },
          validityPeriod: {
            start: '2022-01-01',
            end: '2022-01-30',
          },
          numberOfRepeatsAllowed: 0,
          quantity: {
            value: 120,
            unit: 'TAB',
            system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
            code: 'TAB',
          },
          expectedSupplyDuration: {
            value: 30,
            unit: 'days',
            system: 'http://unitsofmeasure.org',
            code: 'd',
          },
        },
      },
    },
    {
      fullUrl: 'urn:uuid:c4189432-c6bd-4106-93cf-b351fe946478',
      request: {
        method: 'POST',
        url: 'MedicationRequest',
      },
      resource: {
        resourceType: 'MedicationRequest',
        status: 'active',
        intent: 'order',
        category: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category',
                code: 'outpatient',
                display: 'Outpatient',
              },
            ],
          },
        ],
        priority: 'routine',
        medicationReference: {
          reference: 'urn:uuid:58b81f48-eed2-4f13-9652-f0c46c44b66f',
        },
        subject: {
          reference: 'Patient/P03647103112',
        },
        encounter: {
          reference: 'urn:uuid:d539e827-7934-43d5-a6a0-1704fcfd8498',
        },
        requester: {
          reference: 'Patient/P03647103112',
        },
        reasonCode: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/sid/icd-10',
                code: 'A15.0',
                display: 'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
              },
            ],
          },
        ],
        dosageInstruction: [
          {
            sequence: 1,
            text: '4 tablet per hari',
            additionalInstruction: [
              {
                text: 'Diminum setiap hari',
              },
            ],
            patientInstruction: '4 tablet perhari, diminum setiap hari tanpa jeda sampai prose pengobatan berakhir',
            timing: {
              repeat: {
                frequency: 1,
                period: 1,
                periodUnit: 'd',
              },
            },
            route: {
              coding: [
                {
                  system: 'http://www.whocc.no/atc',
                  code: 'O',
                  display: 'Oral',
                },
              ],
            },
            doseAndRate: [
              {
                type: {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/dose-rate-type',
                      code: 'ordered',
                      display: 'Ordered',
                    },
                  ],
                },
                doseQuantity: {
                  value: 4,
                  unit: 'TAB',
                  system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
                  code: 'TAB',
                },
              },
            ],
          },
        ],
        dispenseRequest: {
          dispenseInterval: {
            value: 1,
            unit: 'days',
            system: 'http://unitsofmeasure.org',
            code: 'd',
          },
          validityPeriod: {
            start: '2022-01-01',
            end: '2022-01-30',
          },
          numberOfRepeatsAllowed: 0,
          quantity: {
            value: 120,
            unit: 'TAB',
            system: 'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
            code: 'TAB',
          },
          expectedSupplyDuration: {
            value: 30,
            unit: 'days',
            system: 'http://unitsofmeasure.org',
            code: 'd',
          },
        },
      },
    },
  ],
} as Bundle;
