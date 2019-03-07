import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyController } from './proxy/proxy.controller';
import { RewardApiService } from './reward-api/reward-api.service';

@Module({
  imports: [],
  controllers: [AppController, ProxyController],
  providers: [AppService, RewardApiService],
})
export class AppModule {}
