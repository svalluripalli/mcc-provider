/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { GoalTarget } from './GoalTarget';
import { MccCodeableConcept } from './MccCodeableConcept';

export interface GoalSummary {
    priority?: string;
    expressedByType?: string;
    description?: string;
    achievementStatus?: MccCodeableConcept;
    lifecycleStatus?: string;
    startDateText?: string;
    targetDateText?: string;
    targets?: Array<GoalTarget>;
    fhirid?: string;
}
