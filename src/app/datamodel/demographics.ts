import {cloneDeep} from 'lodash';

export interface Demographic {
  name: string;
  fhirid: string;
  dateOfBirth: string;
  gender: string;
  race: string;
  ethnicity: string;
  id: string;
}

/*
     {
       name: 'Name',
       data: 'Bettry Johnson',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: false
     },
     {
       name: 'Date of Birth',
       data: '07/23/1973',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: false
     },
     {
       name: 'Sex',
       data: 'Female',
       description: '',
       fhirpath: 'Patient.gender',
       default: 'Unspecified',
       date: '',
       extended: false
     },
     {
       name: 'Race',
       data: 'Unspecified',
       description: '',
       fhirpath: '',
       default: 'Unspecified',
       date: '',
       extended: false
     },
    {
      name: 'Ethinicity',
      data: 'Unspecified',
      description: '',
      fhirpath: '',
      default: 'Unspecified',
      date: '',
      extended: false
    },
      {
        name: 'Careplan Title',
        data: 'Sample CKD Careplan',
        description: '',
        fhirpath: '',
        default: '',
        date: '',
        extended: false
      },
      {
       name: 'Date Last Revised',
       data: '04/23/2020',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: false
     },
  {
    name: 'Careplan Id',
    data: 'TDB',
    description: '',
    fhirpath: '',
    default: '',
    date: '',
    extended: false
  },
  {
    name: 'Careplan Addresses',
    data: 'CDK',
    description: '',
    fhirpath: '',
    default: '',
    date: '',
    extended: false
  },
  {
    name: 'Careplan Category',
    data: 'TDB',
    description: '',
    fhirpath: '',
    default: '',
    date: '',
    extended: false
  },
  {
       name: 'Description',
       data: 'Dummy Careplan data',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: true
     },
  {
    name: 'Period',
    data: '12/14/2019 to 12/13/2020',
    description: '',
    fhirpath: '',
    default: '',
    date: '',
    extended: true
  },
  {
       name: 'Status',
       data: 'Active',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: true
     },
  {
    name: 'Careplan Intent',
    data: 'plan',
    description: '',
    fhirpath: '',
    default: '',
    date: '',
    extended: true
  },
  {
       name: 'Notes',
       data: 'No specific notes for the plan at this time',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: true
     },

   ];
*/
