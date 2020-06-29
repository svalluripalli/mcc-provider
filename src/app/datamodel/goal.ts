import {CodeableConcept} from './codeableConcept';


export interface Goal {
  description: string;
  rank: number;
  active: boolean;
  type: string;
  fhirId?: string;
  code?: CodeableConcept;
}
