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
import { join, resolve } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ResponseInterceptor } from './common/responseInterceptor';
import { HttpExceptionFilter } from './common/httpExceptionFilter';

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
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
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

  // 使用 useStaticAssets 来创建静态资源目录，以便访问上传之后的图片
  // useStaticAssets(path,options) path是存放静态资源的路径
  // 静态资源路径： http://localhost:3000/static/xxx
  app.useStaticAssets(join(__dirname, '../public'), {
    prefix: '/static/', //虚拟前缀
  });

  // 添加异常拦截器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 添加全局响应拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  // 监听3000端口
  await app.listen(3000);
}
bootstrap();
