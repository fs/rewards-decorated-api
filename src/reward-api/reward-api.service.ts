import { Injectable } from '@nestjs/common';
import * as http from 'http';
import { ClientRequest, IncomingMessage, RequestOptions } from 'http';

@Injectable()
export class RewardApiService {
  request(options: RequestOptions, callback: (res: IncomingMessage) => void): ClientRequest {
    return http.request(options, callback);
  }
}
