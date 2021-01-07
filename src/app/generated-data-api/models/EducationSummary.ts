/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { GenericType } from './GenericType';
import { MccCodeableConcept } from './MccCodeableConcept';

export interface EducationSummary {
    topic: MccCodeableConcept;
    type: string;
    displayDate?: string;
    date?: GenericType;
    outcome?: MccCodeableConcept;
    status: string;
    performer?: string;
    reasons?: string;
    fhirid?: string;
}
