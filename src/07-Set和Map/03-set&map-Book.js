// 1. Set() 集合
const set1 = new Set([1, 2, 2, 3, 3, 4, 5, 5])
console.log(set1)
console.log([...set1])  // 通过... 运算符将集合转变为数组

// 去除字符串重复字符
console.log([...new Set("abbssscd")].join(''))

// Set()函数传入数组 再用...运算符转化为数组，做到数组的去重

// 遍历set集合可以用for of
let set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(4)
set2.add(3)
set2.add(6)

for (const keys of set2.keys()) {
  console.log(keys)
}

for (const value of set2.values()) {
  console.log(value)
}

for (const entry of set2.entries()) {
  // console.log(entry[0])
  console.log(entry)
}

for (const [index, value] of set2.entries()) {
  console.log(index, value)
}


// 2. WeakSet
// WeakSet成员只能是对象，不能是其他类型的值
//


// 3.Map
// JS对象也是一组键值对，但是键值只能是字符串
// Object  字符串-值
// Map     值-值
const obj = {
  p: 'hello'
}
console.log(typeof (obj.p))

let map = new Map()
map.set(obj, 'content')
console.log(map.size)
console.log(map.get(obj))
console.log(map)

// map 与 数组进行转化
const map2 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

;[...map2.keys()]

;[...map2.values()]

;[...map2.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

;[...map2]

// 4. WeakMap 用于生成键值对集合
// WeakMap只接受对象作为键名，不接受其他类型值作为键名

