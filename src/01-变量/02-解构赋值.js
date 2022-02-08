// 解构赋值是对赋值运算符的一种扩展
// 它针对数组和对象来进行操作

let node = {
  id: 1,
  type: 'string',
  name: 'foo'
}
// 完全解构
let {id, type, name} = node
console.log(id + '-' + type + '-' + name)

let obj = {
  a: {
    name: 'lesenelir'
  },
  b: [],
  c: function () {
    console.log('hello')
  }
}
// 不完全解构
// :用来命名
let {a: t} = obj
console.log(t)
let {b, ...res} = obj
console.log(res)

//-------------------------------

let arr = [1, 2, [3]]
let [a1, b1, c1] = arr
console.log(a1, b1, c1)







