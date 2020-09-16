/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class CareplanControllerService {

    /**
     * @param id
     * @result any OK
     * @throws ApiError
     */
    public static async getCareplan(
        id: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/careplan/${id}`,
        });

        catchGenericError(result);

        return result.body;
    }

    /**
     * @param subject
     * @result any OK
     * @throws ApiError
     */
    public static async getCarePlans1(
        subject: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/careplan`,
            query: {
                'subject': subject,
            },
        });

        catchGenericError(result);

        return result.body;
    }

}