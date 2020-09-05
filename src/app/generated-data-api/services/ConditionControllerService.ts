/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class ConditionControllerService {

    /**
     * @param subject
     * @param server
     * @result any OK
     * @throws ApiError
     */
    public static async getConditions(
        subject: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/condition`,
            query: {
                'subject': subject,
                'server': server,
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
    public static async getCodition(
        id: string,
        serverId?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/condition/${id}`,
            query: {
                'serverId': serverId,
            },
        });

        catchGenericError(result);

        return result.body;
    }

    /**
     * @param subject
     * @param careplan
     * @param server
     * @result any OK
     * @throws ApiError
     */
    public static async getConditionSummary1(
        subject: string,
        careplan?: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/conditionsummary`,
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