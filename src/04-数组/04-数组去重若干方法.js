let arr = [1, 1, 2, 6, 3, 5, 0, 9, 4, 4, 5, 6, 9, 7, 0, 0, 4, 3, 6, 5, 4, 9]


// 1. for 循环
function uniqueArr(arr) {
  let _arr = []
  let flag
  for (let i = 0; i < arr.length; i++) {
    flag = true
    for (let j = 0; j < _arr.length; j++) {
      if (arr[i] === _arr[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      _arr.push(arr[i])
    }
  }
  return _arr
}

// console.log(uniqueArr(arr))


// 2. filter + indexOf
function uniqueArr2(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index  // indexOf(item) 返回item在数组中第一次出现的下标；返回-1 或者index
  })
}


// 3. sort
function uniqueArr3(arr) {
  let _arr = []
  arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      _arr.push(arr[i])
    }
  }
  return _arr
}


// 4. includes
function unique4(arr) {
  let _arr = []
  arr.forEach((item) => {
    if (!_arr.includes(item)) {
      _arr.push(item)
    }
  })
  return _arr
}


// 5. reduce + sort
function uniqueArr5(arr) {
  return arr.sort().reduce((acc, item) => {
    if (acc.length === 0 || acc[acc.length - 1] !== item) {
      acc.push(item)
    }
    return acc
  }, [])
}

// console.log(uniqueArr5(arr))


// 6. Set
function uniqueArr6(arr) {
  let set = new Set(arr)
  return Array.from(set)
}

// console.log(uniqueArr6(arr))


// 7. 单纯reduce
function uniqueArr7(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item)
    }
    return acc
  }, [])

}

// let a = uniqueArr7(arr)
// console.log(a)

let res = [1, 1, 2, 3, 4, 5, 2, 3, 6].filter((item, index) => {
  return arr.indexOf(item) === index
})
console.log(res)

let res2 = [1, 1, 2, 3, 4, 5, 2, 3, 6].filter((item, index) => arr.indexOf(item) === index)
console.log(res2)

// Note: 对于数组的ES6语法，箭头函数没有{} 只写一行 就默认➕上了 return， 把return符合条件的item放入 新数组


// 数组去重 对象
let arrObj = [
  {id: 1, city: '南京'},
  {id: 2, city: '南京'},
  {id: 3, city: '杭州'},
  {id: 4, city: '广州'}
]

let map = new Map()
for (const item of arrObj) {
  if (!map.has(item.city)) {
    map.set(item.city, item)
  }
}

console.log([...map.values()])









