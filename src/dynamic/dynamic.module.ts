/**
 * 动态模块
 * 使用DynamicModule类型和类的静态方法，将一个模块变为动态模块
 * 注意： 同样需要使用expors进行导出
 */
import { Module, DynamicModule, Global } from '@nestjs/common';

interface Options {
  name: string;
}

@Global()
@Module({})
export class DyanmicM {
  static forRoot(options: Options): DynamicModule {
    return {
      module: DyanmicM,
      providers: [
        {
          provide: 'Dynamic',
          useValue: { name: options.name, desc: '我是一个动态模块' },
        },
      ],
      exports: [
        {
          provide: 'Dynamic',
          useValue: { name: options.name, desc: '我是一个动态模块' },
        },
      ],
    };
  }
}
