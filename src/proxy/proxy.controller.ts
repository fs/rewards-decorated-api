import { Controller, Get, Req } from '@nestjs/common';

@Controller()
export class ProxyController {
  @Get('*')
  proxy(@Req() request) {
    return '';
  }
}
