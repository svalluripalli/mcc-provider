import {cloneDeep} from 'lodash';


export interface Demographic {
  name: string;
  data: string;
  description: string;
  fhirpath: string;
  default: string;
  date: string;
  extended: boolean;
  highlighted?: boolean;
  hovered?: boolean;
}


export class Demograhics {

static demographic: Demographic[] = [
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
       extended: true
     },
     {
       name: 'Race',
       data: 'Unspecified',
       description: '',
       fhirpath: '',
       default: 'Unspecified',
       date: '',
       extended: true
     },
    {
      name: 'Ethinicity',
      data: 'Unspecified',
      description: '',
      fhirpath: '',
      default: 'Unspecified',
      date: '',
      extended: true
    },
     {
       name: 'Careplan Identifier',
       data: 'TDB',
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
       name: 'Careplan Title',
       data: 'Sample CDK Careplan',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: true
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
       name: 'Careplan Intent',
       data: 'plan',
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
       name: 'Period',
       data: '12/14/2019 to 12/13/2020',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: true
     },
     {
       name: 'Note',
       data: 'No specific notes for the plan at this time',
       description: '',
       fhirpath: '',
       default: '',
       date: '',
       extended: true
     },
     {
       name: 'Careplan Address',
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
   ];

  static getDemographics(): Demographic[]
  {
    /* return cloneDeep(this.concerns); */
    const str = 'Getting concerns';
    console.log(str);
    return this.demographic;
  }
}

