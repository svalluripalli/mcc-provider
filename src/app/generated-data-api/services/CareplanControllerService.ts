/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class CareplanControllerService {

    /**
     * @param id
     * @param serverId
     * @result any OK
     * @throws ApiError
     */
    public static async getCareplan(
        id: string,
        serverId?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/careplan/${id}`,
            query: {
                'serverId': serverId,
            },
        });

        catchGenericError(result);

        return result.body;
    }

    /**
     * @param subject
     * @param server
     * @result any OK
     * @throws ApiError
     */
    public static async getCarePlans1(
        subject: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/careplan`,
            query: {
                'subject': subject,
                'server': server,
            },
        });

        catchGenericError(result);

        return result.body;
    }

}