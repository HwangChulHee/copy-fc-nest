import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(@Ip() ip: string): string {
    // console.log(ip);
    // return this.appService.getHello();
    // throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    console.log(this.configService.get('ENVIRONMENT'));
    return this.appService.getHello();
  }
}
