// ES5造类
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayName = function () {
  return this.name
}

let p1 = new Person('lesenelir', 18)
console.log(p1)

// ES6造类
class Car {
  constructor(logo, price) {  // constructor 是原型上的方法，实例化的时候会默认调用
    this.logo = logo
    this.price = price
  }

  sayCarLogo() {
    return this.logo
  }
}

let car1 = new Car('Rs6', 200)
console.log(car1)
console.log(car1.sayCarLogo())


// 类的继承 使用关键字 extends
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    return this.name
  }

  sayAge() {
    return this.age
  }
}


class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color
  }

  sayColor() {
    return this.color
  }
}

let dog1 = new Dog('小狗', 18, '红色')
console.log(dog1) // Dog { name: '小狗', age: 18, color: '红色' }
console.log(dog1.sayName())
console.log(dog1.toString())

let dog2 = new Animal('小猫', 18, '23') // Animal { name: '小猫', age: 18 }
console.log(dog2)

// 思考：如何让多个类混入到一个类中
