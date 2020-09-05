/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';

export class GoalControllerService {

    /**
     * @param subject
     * @param careplan
     * @param server
     * @result any OK
     * @throws ApiError
     */
    public static async getGoalSummary(
        subject: string,
        careplan?: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/goalsummary`,
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
    public static async getGoals(
        subject: string,
        server?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/goal`,
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
    public static async getGoal(
        id: string,
        serverId?: string,
    ): Promise<any> {

        const result = await __request({
            method: 'get',
            path: `/goal/${id}`,
            query: {
                'serverId': serverId,
            },
        });

        catchGenericError(result);

        return result.body;
    }

}