// 集合： 无重复值的有序序列
let set = new Set()
console.log(set)

set.add(2)
set.add('4')
set.add('4')
set.add([1,2,3])
set.delete(2)

console.log(set.has('4'))
console.log(set.size)

console.log(set)

// 遍历
set.forEach((val, key) => {
  console.log(val)
  console.log(key)
})

console.log("===============================")
// set转换为数组
let set2 = new Set([1,2,3,3,3,4,5 ])
console.log(set2)
// 使用扩展运算符，将set集合转换为数组
let arr = [...set2]
console.log(arr)

// Note：set中对象的引用无法被释放
let set3 = new Set(), obj3 = {}
set3.add(obj3)
// 释放当前对象
obj3 = null
console.log(set3)

