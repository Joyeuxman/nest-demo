/**
 * 应用程序入口文件。
 * 使用NestFatory来创建Nest应用实例
 */
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 接口版本控制
  app.enableVersioning({ type: VersioningType.URI });

  // 添加session
  app.use(
    session({
      secret: 'xiaoguang', //生成服务端session签名，可以理解为加盐
      name: 'nest-demo.sid', //生成客户端cookie的名字，默认 connect.sid
      rolling: true, // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认为false）
      cookie: { maxAge: null }, //设置返回前端浏览器cookie的配置，配置默认值：{ path: '/', httpOnly: true, secure: false, maxAge: null }
    }),
  );
  await app.listen(3000);
}
bootstrap();
