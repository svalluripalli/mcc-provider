import axios from 'axios';
import { environment } from '../../environments/environment';

const API_PATH = environment.logEndpointUri;
const BEARER_TOKEN = environment.logApiKey;

export type LogRequest = {
  level?: 'error' | 'warn' | 'info' | 'debug';
  event?: string;
  page?: string;
  message: string;
}

export type LogResponse = {
  readonly url: string;
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly body: any;
}

export const doLog = async (request: LogRequest): Promise<LogResponse> => {
  const url = `${API_PATH}/log/do-log`;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
      }
    }

    const response = await axios.post(url, request, config);
    return response.data
  } catch (error) {
    // Should continue with the app even if logging fails
    console.error(error);
  }
}
