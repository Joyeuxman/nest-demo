/**
 * 日志中间件
 * 类型为 依赖注入中间件
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('打印日志+++', req.method, req.originalUrl);

    // 可以使用next()即接着往下执行
    // next();

    // 也可以使用res.send({message: '你被拦截了'})
    res.send({ message: '你被拦截了' });

    // 两者不可同时写，会报错
  }
}
