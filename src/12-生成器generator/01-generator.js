// generator函数 可以通过yield关键字，将函数挂起
// 为改变执行流提供了可能，也为异步编程提供了方案

// generator函数和普通函数的区别：
// 1. function 后面， 函数名之前有*
// 2. 只能在函数内部使用yield表达式，让函数挂起

function *func() {
  yield 2   // yield 让函数挂起 暂停执行
}

let fn = func()  // 返回一个遍历器对象，可以调用next()
/*
* Object [Generator] {}
  { value: 2, done: false }
  { value: undefined, done: true }
* */
console.log(fn)
console.log(fn.next())
console.log(fn.next())

// 总结：generator函数是分段执行的，yield是暂停执行，而next()是恢复执行



