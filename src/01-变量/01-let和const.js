// let声明变量：
// 1. let不能重复声明变量，var可以重复声明变量
// 2. 块级作用域，  ES5有全局、函数、eval作用域
// 3. let不存在变量提升， var存在变量提升
// 4. 不影响作用域链
// 5. let定义的变量不会影响全局变量

{
  // let变量不影响作用域链，内部块可以调用使用外部的变量
  let school = 'Jnu'
  function fn() {
    console.log(school)
  }
  fn()
}

// let __filename = 'lesenelir'   // __filename 是Node定义的全局变量，不能再用let关键字定义
// console.log(__filename)

// const 定义常量
// 块级作用域
// const 定义数组、对象引用类型数据时，对数组、对象元素进行修改，不算对常量的修改，不会报错  => 引用对象保存的是内存地址值
const arr = [1, 2, 3, 4, 5]
arr.push(6)
arr[0] = 0
console.log(arr)

const person = {
  name: 'lesenelir',
  age: 18
}
person.age = 20   // const 可以修改对象数组内部的值，但不能修改对象数组本身
console.log(person.age)


// Note： 默认情况下用const， 只有需要修改的时候再用let

