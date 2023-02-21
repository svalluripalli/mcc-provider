/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MccCoding } from './MccCoding';
import { MccObservation } from './MccObservation';


export type ObservationList = {
    primaryCode?: MccCoding;
    observations?: Array<MccObservation>;
}
