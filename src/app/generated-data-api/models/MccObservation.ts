/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { GenericType } from './GenericType';
import { MccCodeableConcept } from './MccCodeableConcept';
import { MccReference } from './MccReference';
import { ObservationComponent } from './ObservationComponent';
import { ReferenceRange } from './ReferenceRange';

export interface MccObservation {
    code?: MccCodeableConcept;
    status?: string;
    basedOn?: Array<MccReference>;
    value?: GenericType;
    note?: string;
    referenceRanges?: Array<ReferenceRange>;
    components?: Array<ObservationComponent>;
    category?: Array<MccCodeableConcept>;
    dataAbsentReason?: MccCodeableConcept;
    fhirid?: string;
}
