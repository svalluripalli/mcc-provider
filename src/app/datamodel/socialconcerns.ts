import {cloneDeep} from 'lodash';


export interface Concern {
  name: string;
  data: string;
  description: string;
  fhirpath: string;
  default: string;
  date: string;
  highlighted?: boolean;
  hovered?: boolean;
}


export class SocialConcerns {

static concerns: Concern[] = [
     {
       name: 'Food Security',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Transportation Access',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Housing Stability',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Primary Language',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Health Insurance Status/Type',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'History of Abuse',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Smoking Status',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Health Literacy',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Computer/Phone Access',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Alcohol Abuse',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Substance Abuse',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Caregiver Characteristics',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Characteristics of Home Environment',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Employment Status',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Education Level',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
     {
       name: 'Enviromental Conditions',
       data: 'TDB',
       description: '',
       fhirpath: '',
       default: '',
       date: ''
     },
   ];

  static getBaseConcerns(): Concern[]
  {
    /* return cloneDeep(this.concerns); */
    return this.concerns;
  }
}

