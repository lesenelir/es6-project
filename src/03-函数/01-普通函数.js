// 1. 函数默认参数
function fn(a, b = 20) {
  return a + b
}

console.log(fn(30))

// 2. 函数默认参数也可以是一个表达式
function fn2(a, b = getVal(5)) {
  return a + b
}

function getVal(val) {
  return val + 5
}

console.log(fn2(10))

// 3. 剩余运算符， 剩余参数  由...和一个紧接着的具名参数指定 ...keys [剩余运算符多用于函数的形参上]
function checkArgs(...args) {
  console.log(args)
  console.log(arguments)
}

checkArgs('a', 'b', 'c')


function pick(obj, ...keys) {
  let result = Object.create(null)
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = obj[keys[i]]
  }
  return result
}

const book = {
  title: '货币未来',
  author: 'Bitcoin',
  year: 2009
}
let bookData = pick(book, "title", "author", "year")
console.log(bookData)


// 4. 扩展运算符...
// 剩余运算符： 把多个独立参数合并为一个数组
// 扩展运算符： 将一个数组分割，并将各个项作为分离的参数传递给函数
const arr = [1, 43, 5, 8, 2, 6, 77]
const maxNumber = Math.max(...arr)
console.log(maxNumber)


// 总结： ... 运算符是把元素合并和拆散的运算符
// ...合成数组：函数定义时作为函数参数
// ...拆散元素：(...数组) 拆散数组元素

