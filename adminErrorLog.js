{
  "meta": {
    "msgId": "<a message id captured from EMR>",
    "msgType": "ADT^A01",
    "eventTimeStamp": "2023-10-13T12:00:00-04:00",
    "userId": "<id of user who put in EMR message>",
    "source": "<source of system generating message>",
    "facilityCodeEMR": "<A code which envoy populates from EMR message>",
    "tenantCodeCL": "<A code which we provide to Envoy indicating tenant>",
    "eventType": "PATIENTADMIN",
    "eventSubType": "CreateUpdate",
    "clMetaFields": {
      "facilityId": "3101e68f-e137-473e-a115-df8f89d0e385",
      "facilityCode": "GHS",
      "facilityName": "Grady",
      "tenantId": "c12a1ec6-762a-4373-9ded-d860a92e00ac",
      "tenantName": "Grady"
    }
  },
  "patient": {
    "identifiers": {
      "medicalRecordNumber": "MRN_AKERS_1",
      "masterPatientIdentifier": "MPI_AKERS_1"
    },
    "name": {
      "first": "Adam",
      "middle": "Alan",
      "last": "Akers"
    },
    "dateOfBirth": "1990-12-03",
    "birthGender": "MALE",
    "preferredGender": "",
    "weight": "",
    "weightUnits": "",
    "height": "",
    "heightUnits": "",
    "contact": {
      "address": {
        "streetAddress1": "",
        "streetAddress2": "",
        "city": "",
        "state": "",
        "zipCode": ""
      },
      "email": "",
      "phoneNumbers": {
        "home": "",
        "work": ""
      }
    }
  },
  "visit": {
    "identifiers": {
      "visitNumber": "VN_AKERS_1",
      "HAR": "",
      "admittingCSN": ""
    },
    "currentLocation": {
      "departmentCode": "11A",
      "bedCode": "B",
      "roomCode": "1",
      "facilityCode": "GHS"
    },
    "reservedLocation": {
      "departmentCode": "11A",
      "bedCode": "B",
      "roomCode": "1",
      "facilityCode": "GHS"
    },
    "insurancePlans": [
      {
        "code": "",
        "description": "",
        "priority": ""
      },
      {
        "code": "",
        "description": "",
        "priority": ""
      }
    ],
    "expectedDate": "2023-12-03T22:55:00-04:00",
    "admitDate": "",
    "hospitalService": "",
    "financialClass": "",
    "patientClass": "<used to determine the value for admitType>",
    "patientType": "<used to determine the value for admitType>",
    "admitType": "IN",
    "physicianInfo": [
      {
        "physicianType": "",
        "npi": "",
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "group": ""
      }
    ],
    "expectedDischargeTime": "2024-01-20",
    "workingDischargeDisposition": "",
    "dischargeDateTime": "",
    "dischargeDisposition": "",
    "admittingComplaint": "",
    "admittingDiagnosisCode": "",
    "admittingDiagnosisDesc": "",
    "drgCode": "",
    "alerts": [
      {
        "name": "Telemetry",
        "value": "Yes"
      },
      {
        "name": "Bariatric",
        "value": "No"
      },
      {
        "name": "IsolationOrganism",
        "value": "HepatitisA",
        "remove": false
      },
      {
        "name": "IsolationOrganism",
        "value": "RSV",
        "remove": false
      },
      {
        "name": "IsolationOrganism",
        "value": "Ecoli",
        "remove": true
      },
      {
        "name": "AirborneIsolation",
        "value": "Yes"
      },
      {
        "name": "FallRisk",
        "value": "Yes"
      }
    ]
  }
}