/**
 * 常见功能是用来处理http请求以及调用service层的处理方法
 * 主要配置路由
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getMovieList')
  getMovieList(): Array<any> {
    return this.appService.getMovieList();
  }
}
