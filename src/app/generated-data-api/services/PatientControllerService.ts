/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class PatientControllerService {

    /**
     * @param name
     * @param serverId
     * @result any OK
     * @throws ApiError
     */
    public static async getPatients(
        name: string,
        serverId?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/patient`,
            query: {
                'name': name,
                'serverId': serverId,
            },
        });

        catchGenericError(result);

        return result.body;
    }

    /**
     * @param id
     * @param serverId
     * @result any OK
     * @throws ApiError
     */
    public static async getPatient(
        id: string,
        serverId?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/patient/${id}`,
            query: {
                'serverId': serverId,
            },
        });

        catchGenericError(result);

        return result.body;
    }

}