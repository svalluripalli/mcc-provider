import {CodeableConcept} from './codeableConcept';

export interface Demographic {
  fhirid: string;
  clinicalStatus: CodeableConcept;
  verifiationStatus: CodeableConcept;
  categories: CodeableConcept[];
  severity: CodeableConcept;
  code: CodeableConcept;
  onset: string;
  abatement: string;
  recordedDate: string;
  recorder: string;
  asserter: string;
  note: string;
}
