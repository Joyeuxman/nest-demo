/**
 * IOC 集中调度器 控制反转
 * 在引入Ioc容器 container 之后，B 与 A 的代码逻辑已经解耦，
 * 可以单独扩展其他功能，也可以方便加入其他模块C，
 * 所以在面对复杂的后端业务逻辑中，引入Iod可以降低组件之间的耦合度，实现系统各层之间的耦合，减少维护与理解成本
 * classB、classC 与 ClassA 强耦合（即A的参数调整了，B、C也需要跟着变化）
 */

class A {
  name: string;
  constructor(name: string) {
    this.name = name || 'A';
  }
}

// class B {
//   a: any;
//   constructor() {
//     this.a = new A().name;
//   }
// }

// class C {
//   a: any;
//   constructor() {
//     this.a = new A().name;
//   }
// }

class AA {
  name: string;
  constructor(name: string) {
    this.name = name || 'AA';
  }
}

/**
 * 调度器
 */
class Container {
  mo: any;
  constructor() {
    this.mo = {};
  }

  provide(key: string, mo: any) {
    this.mo[key] = mo;
  }

  get(key: string) {
    return this.mo[key];
  }
}

const mo = new Container();
mo.provide('A', new A('A'));
mo.provide('AA', new AA('AA'));

class BB {
  a: any;
  b: any;
  constructor() {
    this.a = mo.get('A');
    this.b = mo.get('AA');
  }
}
