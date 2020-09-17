import {Goal} from './goal';


export interface GoalLists {
  activeClinicalGoals: Goal[];
  inactiveClinicalGoals: Goal[];
  activePatientGoals: Goal[];
  inactivePatientGoals: Goal[];
}
