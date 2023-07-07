/**
 * 应用程序入口文件。
 * 使用NestFatory来创建Nest应用实例
 */
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 接口版本控制
  app.enableVersioning({ type: VersioningType.URI });
  await app.listen(3000);
}
bootstrap();
