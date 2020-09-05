/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { MccCodeableConcept } from './MccCodeableConcept';

export interface MccCondition {
    clinicalStatus?: MccCodeableConcept;
    verifiationStatus?: MccCodeableConcept;
    categories?: Array<MccCodeableConcept>;
    severity?: MccCodeableConcept;
    code?: MccCodeableConcept;
    onset?: string;
    abatement?: string;
    recordedDate?: string;
    recorder?: string;
    asserter?: string;
    note?: string;
    profileId?: string;
    fhirid?: string;
}
