import {CodeableConcept} from './codeableConcept';


export interface Goal {
  description: string;
  rank: number;
  priority: string;
  active: boolean;
  type: string;
  fhirId?: string;
  code?: CodeableConcept;
  created?: string;
  targetdate?: string;
  status?: string;
}
