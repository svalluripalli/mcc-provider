/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { MccCodeableConcept } from './MccCodeableConcept';
import { MccRange } from './MccRange';
import { MccSimpleQuantity } from './MccSimpleQuantity';

export interface ReferenceRange {
    low?: MccSimpleQuantity;
    high?: MccSimpleQuantity;
    type?: MccCodeableConcept;
    appliesTo?: Array<MccCodeableConcept>;
    age?: MccRange;
    text?: string;
}
