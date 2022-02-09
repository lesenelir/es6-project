// ES6直接写入变量和函数，作为对象的属性和方法
const name = 'lesenelir', age = 18
const person = {
  name,
  age,
  say() {
    console.log(this.name)
  }
}
person.say()


let car = {
  wheel: 4,
  get() {
    return this.wheel
  },
  set(newVal) {
    if (newVal < this.wheel) {
      throw new Error('轮子数太少')
    }
    this.wheel = newVal
  }
}
car.set(6)
console.log(car.get())

// Object对象的方法
// is()  ===  比较两个值是否严格相等
// console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true

// assign() 对象的属性合并
// Object.assign(target, obj1, obj2...)   // 把obj1 obj2 后面所有的对象都合并到target中
let newObj = Object.assign({}, {a: 1}, {b: 2})
console.log(newObj)

