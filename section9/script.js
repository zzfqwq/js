"use strict";
// 构造函数 Constructor Function
const Person = function (firstName, birthYear) {
  // 实例属性
  this.firstName = firstName;
  this.birthYear = birthYear;

  // ❌ 不推荐的做法：不要把方法定义在构造函数里
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// 创建实例
const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 👇 这4个步骤会在执行 new Person(...) 时自动发生：
// 1. 创建一个空对象 {}
// 2. 调用函数，this 被绑定到新创建的对象上
// 3. 新对象被连接到原型（prototype）
// 4. 函数自动返回该对象

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

// 判断对象是否是某个构造函数的实例
console.log(jonas instanceof Person); // true

// 查看构造函数的原型对象
console.log(Person.prototype);

// 向原型对象添加方法（推荐做法）
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// 所有实例都能访问 calcAge 方法
jonas.calcAge();
matilda.calcAge();

// 验证原型链
console.log(jonas.__proto__); // 应该是 Person.prototype
console.log(jonas.__proto__ === Person.prototype); // true

// 另一种验证原型关系的方法
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false ❗️

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
console.log / jonas.__proto_;
// Object prototype (top of prototype chain)
console.log(jonas._proto_._proto_);
console.log(jonas.proto_._proto_ - _proto_);
console.dir(Person.prototype.constructor);
const arr = [13, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr._proto_);
console.log(arr._proto_ === Array.prototype);
console.log(arr._proto_._proto_);
Array,
  (prototype.unique = function () {
    return [...new Set(this)];
  });
console.log(arr.unique());

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();
