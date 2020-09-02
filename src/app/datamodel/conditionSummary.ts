import {CodeableConcept} from './codeableConcept';
// import {ConditionHistory} from './conditionHistory';
import {ConditionHistory} from '../generated-data-api';

export interface ConditionSummary {
  code: CodeableConcept;
  categories:	string;
  history: ConditionHistory[];
  firstOnset:	string;
  clinicalStatus:	string;
  verificationStatus:	string;
  checked?: boolean;
  highlighted?: boolean;
  hovered?: boolean;
}
