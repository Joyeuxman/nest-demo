import { Module, Global } from '@nestjs/common';
import { GlobalService } from './global.service';
import { GlobalController } from './global.controller';

/**
 * 通过使用 @Global装饰器 将GlobalModule变为全局模块，类似于JS中的全局变量
 * 这样在其他模块中，无需通过 module import的方式使用，可以直接使用
 * 注意：全局模块也需要使用 exports 导出
 */
@Global()
@Module({
  controllers: [GlobalController],
  providers: [GlobalService],
  exports: [GlobalService],
})
export class GlobalModule {}
