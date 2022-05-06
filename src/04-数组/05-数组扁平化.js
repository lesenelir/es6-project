// 多维数组变为一维数组 即为扁平化
let arr = [[1, 2, 3], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 数组扁平化， 并数组去重，且满足数组升序
let res = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)

// 1. ES5 for循环处理
function flatten(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i])) // 【递归】处理数组扁平化，直至遍历完整个数组
    } else {
      res.push(arr[i])
    }
  }
  return res
}


// 2. 使用reduce进行数组扁平化
function flattenUseReduce(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenUseReduce(item) : item) // 【递归】
  }, [])
}

function flatten2(arr) {
  return arr.reduce((accumulator, item) => {
    if (Array.isArray(item)) {
      accumulator = accumulator.concat(flatten2(item))
    } else {
      accumulator.push(item)
    }
    return accumulator
  }, [])
}

console.log(flatten2(arr))

console.log(flattenUseReduce(arr))

// 3. ES6 中数组扁平化API
// arr.flat(depth)  depth 可以设置为 Infinity
let newA = arr.flat(Infinity)
// console.log(newA)

