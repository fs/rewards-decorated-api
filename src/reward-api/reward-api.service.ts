import { Injectable } from '@nestjs/common';
import * as http from 'http';

@Injectable()
export class RewardApiService {
  request(options, callback) {
    return http.request(options, callback);
  }
}
