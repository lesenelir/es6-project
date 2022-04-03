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

console.log(uniqueArr5(arr))


// 6. Set
function uniqueArr6(arr) {
  let set = new Set(arr)
  return Array.from(set)
}
console.log(uniqueArr5(arr))

