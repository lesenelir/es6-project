// 原始数据类型 Symbol，它代表独一无二的值
// Symbol用途：用来定义对象的私有变量
const name = Symbol('name')
const name2 = Symbol('name')
console.log(name === name2)  // false

let s1 = Symbol('s1')
console.log(s1)  // Symbol(s1)
let obj = {
  // 使用变量作为对象的属性要加[]
  [s1]: 'lesenelir'
}
// 用symbol定义私有变量，取值一定要用[变量名]
console.log(obj[s1])
console.log(obj.s1) // undefined
