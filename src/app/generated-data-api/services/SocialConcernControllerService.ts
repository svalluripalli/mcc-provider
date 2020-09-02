/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class SocialConcernControllerService {

    /**
     * @param subject
     * @param careplan
     * @param server
     * @result any OK
     * @throws ApiError
     */
    public static async getConditionSummary(
        subject: string,
        careplan?: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/socialconcernsummary`,
            query: {
                'subject': subject,
                'careplan': careplan,
                'server': server,
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
    public static async getCarePlans(
        subject: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/socialconcerns`,
            query: {
                'subject': subject,
                'server': server,
            },
        });

        catchGenericError(result);

        return result.body;
    }

}