/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ConditionHistory } from './ConditionHistory';
import { MccCodeableConcept } from './MccCodeableConcept';

export interface ConditionSummary {
    code?: MccCodeableConcept;
    categories?: string;
    history?: Array<ConditionHistory>;
    profileId?: string;
    verificationStatus?: string;
    firstOnset?: string;
    clinicalStatus?: string;
}
