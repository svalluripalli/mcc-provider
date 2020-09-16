import {CodeableConcept} from './codeableConcept';

export interface CarePlan {
  title: string;
  dateLastRevised: string;
  addresses: CodeableConcept[];
  addressesSummary: string;
  categorySummary: string;
  categories: CodeableConcept[];
  id: string;
  periodStarts: string;
  periodEnds: string;
  status: string;
  intent: string;
  description: string;
  notes: string;
  dateResourceLastUpdated: string;
  fhirid: string;
}
