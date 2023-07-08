/**
 * 应有程序的根模块
 * 根模块用于处理其他类的引用、共享
 * 经过@Module装饰器类 的处理，AppModule类成为IOC容器
 * 其中 @Module 参数有：
 * imports: 导入的子模块列表
 * controllers: 使用者列表
 * provides: 提供者列表
 * exports: 导出的模块列表
 *
 * 重要概念点：
 * IOC：Inversion of Control，控制反转。由IOC容器来负责对象的生命周期和对象间的关系、
 * 通俗来讲：Nest所倡导的开发方式就是如此，所有的类都会在IOC容器中登记，告诉IOC你是个什么东西(提供者)，你需要什么东西（使用者），
 * 然后IOC容器会在系统运行到适当的时候，把你要的东西主动给你，同时也把你交给其他需要你的东西。
 * 所有的类的创建、销毁都由 IOC容器来控制，也就是说控制对象生存周期的不再是引用它的对象，而是IOC容器。
 * 对于某个具体的对象而言，以前是它控制其他对象，现在是所有对象都被IOC容器控制，所以这叫控制反转
 *
 * DI：Dependency Injection，依赖注入。
 * IoC的一个重点是在系统运行中，动态的向某个对象提供它所需要的其他对象。这一点是通过DI（Dependency Injection，依赖注入）来实现的。
 *
 * providers:有多种写法
 * providers: [
 *  // 写法一（是写法二的简写形式）
 *  AppService,
 *  // 写法二
 *  {
 *    provide: 'AppService', // 提供者的名称
 *    useClass: AppService  // 提供者所使用的类
 *  },
 *  // 写法三：自定义名称。注意自定义名称之后，需要使用@Inject来取，不然找不到
 *  // 如：class AppController { constructor (@Inject('provideName') private readonly appService : AppService) {} }
 *  {
 *    provide:'provideName',
 *    useClass: AppService
 *  },
 *  // 写法四：自定义注入值
 *  // class AppController { constructor (@Inject('customInjectValue') private readonly customInjectValue : AppService) {} }
 *  {
 *    provide: 'customInjectValue',
 *    useValue: [1,2,3] , // 注入值可以是任意值
 *  },
 *  // 写法五：工厂模式（服务之间有相互的依赖关系或者需要根据逻辑生成提供者）
 *  // 现将依赖的提供者写在队列前面，在该提供者中使用inject来声明引入，最后使用useFactory函数来生成一个新的提供者。其中useFactory的参数是inject注入的值
 *  OtherService,
 *  {
 *    provide: 'factory',
 *    inject: [OtherService],
 *    useFactory(OtherService:OtherService){
 *      return newProvide;
 *    }
 *  },
 *  // 写法六：异步模式。useFactory返回一个异步操作
 *  {
 *    provide: 'asyncProvide',
 *    async useFactory(){
 *      return await new Promise((resolve)=>{
 *        setTimeout(()=> resolve('asyc'),2000)
 *      })
 *    }
 *  }
 * ]
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GlobalModule } from './global/global.module';
import { DyanmicM } from './dynamic/dynamic.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    GlobalModule,
    DyanmicM.forRoot({ name: '动态模块' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
