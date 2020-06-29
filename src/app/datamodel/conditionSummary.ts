import {CodeableConcept} from './codeableConcept';
import {ConditionHistory} from './conditionHistory';

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
