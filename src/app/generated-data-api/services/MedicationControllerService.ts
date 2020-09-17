/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class MedicationControllerService {

    /**
     * @param subject
     * @param careplan
     * @param server
     * @result any OK
     * @throws ApiError
     */
    public static async getConditionSummary2(
        subject: string,
        careplan?: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/medicationsummary`,
            query: {
                'subject': subject,
                'careplan': careplan,
                'server': server,
            },
        });

        catchGenericError(result);

        return result.body;
    }

}