/**
 * 装饰器
 * 分为4类：类装饰器、属性装饰器、参数装饰器、函数装饰器
 */

/**
 * 类装饰器
 * @param target 需要装饰的类
 */
const classDecorator: ClassDecorator = (target: any) => {
  target.prototype.name = '小光';
  console.log('in classDecorator', target);
};

const propertyDecorator: PropertyDecorator = (
  target: any,
  key: string | symbol,
) => {
  console.log('in propertyDecorator', target, key);
};

const methodDecorator: MethodDecorator = (
  target: any,
  key: string | symbol,
  descriptor: any,
) => {
  console.log('in methodDecorator', target, key, descriptor);
};

const parameterDecorator: ParameterDecorator = (
  target: any,
  key: string | symbol,
  parameterIndex: number,
) => {
  console.log('in parameterDecorator', target, key, parameterIndex);
};

@classDecorator
class XiaoGuang {
  @propertyDecorator
  public age: number;

  constructor() {
    console.log(this);
  }

  @methodDecorator
  getAge() {
    return this.age;
  }

  setAge(@parameterDecorator age: number) {
    this.age = age;
  }
}

const guang: any = new XiaoGuang();
console.log('guang name', guang.name);
