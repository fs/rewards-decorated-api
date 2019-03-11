import { Controller, Get, Req, Res } from '@nestjs/common';
import { RewardApiService } from '../reward-api/reward-api.service';

@Controller()
export class ProxyController {
  constructor(private readonly rewardsApiService: RewardApiService) {}

  @Get('*')
  proxy(@Req() request, @Res() response) {
    const rewardsApiRequest = this.rewardsApiService.request({
      path: request.url,
      method: request.method,
      headers: request.headers,
    }, (rewardsResponse) => {
      response.writeHead(rewardsResponse.statusCode, rewardsResponse.headers);
      rewardsResponse.pipe(response);
    });

    request.pipe(rewardsApiRequest);
  }
}
