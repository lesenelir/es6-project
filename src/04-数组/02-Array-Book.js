// ... 扩展运算符  展开数组
// 将数组转换为函数的参数
function Add(x, y, z) {
  return x + y + z
}

let args = [1, 2, 3]
let res = Add(...args)  // 将args数组通过函数调用...扩展运算符作为函数参数
console.log(res)

console.log(Math.max(...[1, 2, 0]))

let arr1 = [0, 1, 2]
let arr2 = [3, 4, 5]
arr1.push(...arr2)
console.log(arr1)

// ...扩展运算符应用：
// 1. 复制数组
const a1 = [0, 1, 2]
const a2 = [...a1]
a2.push(3)
a1[0] = -1            // 通过复制数组是深拷贝
console.log(a1, a2)   // 通过复制数组是复制数组元素，并不是数组的内存地址的拷贝

// 2. 与解构赋值使用
const [first, ...rest] = [0, 1, 2, 3, 4]
console.log(first, rest)

// 3. 与字符串使用
// 将字符串转化为真正的数组
let str = "hello"
let strArr = [...str]
console.log(strArr)


// from() 将伪数组、可遍历(Iterable)的对象 转换为真正的数组

// fill(num, startIndex, endIndex) 使用给定值，填充一个数组
new Array(3).fill(7)
;['a', 'b', 'c'].fill(7, 1, 2)


// flat() 拉平数组， 用于嵌套数组，返回一个新数组
let a11 = [1, 2, [3, 4, [5, 6]], 7].flat()
console.log(a11) // [ 1, 2, 3, 4, [ 5, 6 ], 7 ] // flat() 只拉平一层数组
let a12 = [1, 2, [3, 4, [5, 6]], 7].flat(2)
console.log(a12)
let a13 = [1, 2, [3, 4, [5, 6]], 7].flat(Infinity)
console.log(a13)

// flatMap()
let arr = [2, 3, 4].flatMap((x) => x * 2)
console.log(arr)


// slice 不改变原数组
let sss = [1,2,3,4,5,6]
let s = sss.slice(0, 3)
console.log(s)
console.log(sss) // 还是原来的数组

