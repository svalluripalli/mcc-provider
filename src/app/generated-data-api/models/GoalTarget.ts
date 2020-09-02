/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { GenericType } from './GenericType';
import { MccCodeableConcept } from './MccCodeableConcept';

export interface GoalTarget {
    measure?: MccCodeableConcept;
    value?: GenericType;
    dueType?: string;
    due?: string;
}
