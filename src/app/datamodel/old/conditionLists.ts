import {ConditionSummary} from './conditionSummary';

export interface ConditionLists {
  activeConditions: ConditionSummary[];
  inactiveConditions: ConditionSummary[];
  activeConcerns: ConditionSummary[];
  inactiveConcerns: ConditionSummary[];
}
