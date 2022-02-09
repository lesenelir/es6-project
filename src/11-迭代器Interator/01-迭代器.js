// ES6 迭代器 Interator
// 一种新的遍历机制，有两个核心

// 1. 迭代器是一个接口，能快捷的访问数据，通过 Symbol.iterator来创建迭代器 通过迭代器的next()方法 获取迭代之后的结果
// 2. 迭代器是用于遍历数据解构的指针（数据库的游标）

// 使用迭代
const items = ["one", "two", "three"]
// 创建新的迭代器
const item = items[Symbol.iterator]()
console.log(item.next()) // { value: 'one', done: false }  done如果为false则迭代继续，done如果为true则迭代结束

console.log(item.next())
console.log(item.next())
console.log(item.next())
