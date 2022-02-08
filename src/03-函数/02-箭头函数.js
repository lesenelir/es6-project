// arrow function
let add = val => val + 5
console.log(add(5))

// 箭头函数 没有绑定this
// 普通函数的this值是会发生改变，this值是调用该函数的上下文对象
// es5中this值：取决于调用该函数的上下文对象

// 1. 箭头函数内部没有arguments
let getVal = (a, b) => {
  console.log(this)  // {}
  // console.log(arguments)
  return a + b
}
console.log(getVal(10, 20))

// 2. 箭头函数不能用new关键字实例化对象
// function函数是一个对象，但是箭头函数不是一个对象
