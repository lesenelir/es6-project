// reduce()
// reduce callback函数多了一个accumulator 累加器函数: 累加器累计回调的返回值：是上一次调用回调时返回的累积值

;[0, 1, 2, 3, 4].reduce((accumulator, item, index, array) => {
  return accumulator + item
})

;[0, 1, 2, 3, 4].reduce((accumulator, item, index, array) => {
  return accumulator + item
}, 10) // reduce的第二个参数是累加器的初始值，即accumulator 的初始值是10


// reduce 九种使用场景

// 1. 数组里所有值的和
;[0, 1, 2, 3, 4].reduce((accumulator, item, index, array) => {
  return accumulator + item
})

// 2. 累加对象数组里的值
let initialValue = 0
let objSum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (accumulator, item) => accumulator + item.x,
    initialValue
)
console.log(objSum)

// 3. 将二维数组转换为一维数组
let flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => {
  return acc.concat(cur)
}, []) // acc初始值是一个[]
console.log(flattened)

// 4. 计算数组中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((acc, item) => {
  if (item in acc) {
    acc[item]++
  } else {
    acc[item] = 1
  }
  return acc
}, {}) // acc初始值是一个{}

console.log(countedNames)

// 5. 按照对象的属性对该对象obj进行分类
let people = [
  {name: 'Alice', age: 21},
  {name: 'Max', age: 20},
  {name: 'Jane', age: 20}
]

function groupBy(objectArray, property) { // 根据property进行分类
  return objectArray.reduce((acc, item) => {
    let key = item[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  })
}

let groupPeople = groupBy(people, 'age')
console.log(groupPeople)

// 6. 数组扁平化



// 7. 数组去重
let arr = [1,2,1,2,3,4,5,4,5,4,3,4,4,4,]
let result = arr.sort().reduce((acc, item) => {
  if (acc.length === 0 || acc[acc.length - 1] !== item) { // 数组为空直接添加元素 || 当前遍历的元素不等于数组最后一个元素则添加元素
    acc.push(item)
  }
  return acc
}, [])
console.log(result)

// 8. 按顺序运行Promise


// 9. 功能性管道函数


// Note： 个人理解： reduce中的accumulator类似于一个在reduce第一个参数的回调函数中的一个"变量"
