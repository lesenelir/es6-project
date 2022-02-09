// 数组方法

// from() 将伪数组转变为真正数组 (伪数组不能用pop push 等方法)
function add() {
  let arr = Array.from(arguments)
  console.log(arr)
}

add(1, 2, 3)


// of() 将一组值转换为数组
console.log(Array.of(1, 2, '3', [4, 5], {id: 1}))


// find()  findIndex()
let arr1 = [1, 2, -1, -5, -10, 1, 3]
console.log(arr1.find(val => val < 0))
console.log(arr1.findIndex(val => val < 0))


// 遍历数组的相关方法
// entires()  values()  keys()
let arr2 = [1, 3, 4, -5, 2]
for (const index of arr2.keys()) {
  console.log(index)
}
for (const number of arr2.values()) {
  console.log(number)
}
for (const [index, val] of arr2.entries()) {
  console.log(index + " " + val)
}


// includes() 数组是否包含某一个值，返回bool
console.log([1, 2, 3].includes(3))




