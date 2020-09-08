/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class FhirServerControllerService {

    /**
     * @param id
     * @result any OK
     * @throws ApiError
     */
    public static async getServer(
        id: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/fhirserver/${id}`,
        });

        catchGenericError(result);

        return result.body;
    }

    /**
     * @result any OK
     * @throws ApiError
     */
    public static async getServers(): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/fhirserver`,
        });

        catchGenericError(result);

        return result.body;
    }

}