// 1. 函数参数的默认值
function printLog(x, y = 'World') {
  console.log(x, y)
}

printLog('hello')
printLog('hello', undefined)  // 在默认参数位置传入undefined，则触发参数等于默认值
printLog('hello', 'lesenelir')

// 2. rest 参数 获取函数的多余参数，传入一个数组中
function add(...values) {
  let sum = 0
  for (const value of values) {
    sum += value
  }
  return sum
}

console.log(add(2, 5, 3))

// 函数定义用 rest参数传入参数 代替了 arguments对象，ES5之前 要用Array.from() 将arguments对象伪数组转换为数组
// rest 参数 ...x  只能当作函数的最后一个参数


// 3. 箭头函数
// 箭头函数和rest参数使用
const headAndTail = (head, ...tail) => [head, tail]
console.log(headAndTail(1, 2, 3, 4,))

// 普通函数this指向普通函数运行时所在的对象；箭头函数的this指向上层作用域中的this

// 函数的toString()
function fn() {}
console.log(fn.toString())
