// 对象的解构：属性没有次序，变量必须和属性名同名，才算取到值
let {b, a, c: cname} = {a: '1', b: '2', c: '3'}
console.log(a)
console.log(b)
console.log(cname)  // 解构赋值新命名

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
let {foo: foo, bar: bar} = {foo: 'aaa', bar: 'bbb'}
console.log(foo)
console.log(bar)

// 嵌套解构
let obj = {
  p: [
    'Hello',
    {y: 'World'}
  ]
}

let {p, p: [x, {y}]} = obj
console.log(p)
console.log(x)
console.log(y)


// 解构赋值的应用：
// 1. 交换变量
let x1 = 1
let y1 = 2
;[x1, y1] = [y1, x1]
console.log(x1, y1)

// 2. 从函数返回多个值 （返回数组、对象）
function fn() {
  return {
    apple: 'apple',
    pear: 'pear'
  }
}

let {apple, pear} = fn()
console.log(apple, pear)

// 3. 提取json数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let {id, status, data: number} = jsonData;
console.log(id, status, number);

// 4. 遍历map结构
// map是一组键值对，部署Interator接口的对象，都可以使用forof循环，配合变量的解构赋值，获取键名和键值方便
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (const [key, value] of map) {
  console.log(key, value)
}

for (const [key] of map) {
  console.log(key)
}

for (const [,value] of map) {
  console.log(value)
}

// 总结： 对于数组的解构赋值是按照数组次序；对于对象的解构赋值是按照对象属性名
