/**
 * 应用程序入口文件。
 * 使用NestFatory来创建Nest应用实例
 */
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NextFunction, Request, Response } from 'express';
import * as cors from 'cors';

const blackList = ['/auth/info'];
/**
 * 全局中间件
 * 实现一个简单的黑名单拦截
 * 注意：全局中间件只能使用函数来实现
 * @param req
 * @param res
 * @param next
 */
const globalMiddle = (req: Request, res: Response, next: NextFunction) => {
  const requestUrl = req.originalUrl;
  if (blackList.includes(requestUrl)) {
    res.send({ message: '小黑子露出鸡脚了吧,进小黑屋吧！嘿嘿嘿~' });
  } else {
    next();
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 可以跨域访问 cors是一个解除跨域限制的中间件
  app.use(cors());

  // 黑名单拦截
  app.use(globalMiddle);

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

  // 监听3000端口
  await app.listen(3000);
}
bootstrap();
