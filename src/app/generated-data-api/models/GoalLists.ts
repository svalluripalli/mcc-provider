/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { GoalSummary } from './GoalSummary';
import { GoalTarget } from './GoalTarget';

export interface GoalLists {
    activeClinicalGoals?: Array<GoalSummary>;
    inactiveClinicalGoals?: Array<GoalSummary>;
    activePatientGoals?: Array<GoalSummary>;
    inactivePatientGoals?: Array<GoalSummary>;
    activeTargets?: Array<GoalTarget>;
}
