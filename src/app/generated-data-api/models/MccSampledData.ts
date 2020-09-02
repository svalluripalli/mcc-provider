/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { MccSimpleQuantity } from './MccSimpleQuantity';

export interface MccSampledData {
    origin?: MccSimpleQuantity;
    period?: string;
    factor?: string;
    lowerlimit?: string;
    upperlimit?: string;
    dimensions?: number;
    data?: string;
}
