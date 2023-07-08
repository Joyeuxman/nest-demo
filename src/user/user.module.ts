import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Logger } from 'src/middleware/logger';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 指定拦截某个路由，拦截所有以 /v2/user 开头的路由
    // 注意，当添加版本控制时，拦截时需要将 版本路径加上
    // consumer.apply(Logger).forRoutes('v2/user');

    // 也可以指定拦截的方法
    // consumer.apply(Logger).forRoutes({
    //   path: 'v2/user',
    //   method: RequestMethod.POST,
    // });

    // 也可以将整个UserController放进去，表明拦截UserController中的所有路由
    consumer.apply(Logger).forRoutes(UserController);
  }
}
