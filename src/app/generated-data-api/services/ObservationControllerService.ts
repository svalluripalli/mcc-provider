/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class ObservationControllerService {

    /**
     * @param subject
     * @param code
     * @param server
     * @result any OK
     * @throws ApiError
     */
    public static async getLatestObservation(
        subject: string,
        code: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/find/latest/observation`,
            query: {
                'subject': subject,
                'code': code,
                'server': server,
            },
        });

        catchGenericError(result);

        return result.body;
    }

}