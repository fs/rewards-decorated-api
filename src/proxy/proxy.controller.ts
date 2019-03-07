import { Controller, Get, Req, Res } from '@nestjs/common';
import { RewardApiService } from '../reward-api/reward-api.service';

@Controller()
export class ProxyController {
  constructor(private readonly rewardsApiService: RewardApiService) {}

  @Get('*')
  proxy(@Req() request, @Res() response) {
    response.send('111');
  }
}
