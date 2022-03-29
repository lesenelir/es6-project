// async 表示异步，表示这个函数一定有异步任务
// async function fn() {
//  let result = await xxx
// }
// async 函数返回的是一个promise对象
// await 后面可以是Promise对象，也可以是字符串、数字、布尔值  =>  都转成Promise对象
// async函数会等到函数内部的所有await后的Promise对象全部执行完，才会发生状态改变

// Note： 1. 只要await语句后面Promise状态变成了reject，则整个async函数会中断执行
//        2. 可以把有问题的代码（返回reject）用try catch包裹，防止async函数直接中断（建议：有await都用try catch）

async function fn() {
  return 'sool'
}

fn().then(res => { // async返回一个promise对象
  console.log(res)
})


async function fn2() {
  await Promise.reject('出现错误') // 中断
  await Promise.resolve('success')
}

fn2().then(res => {
  console.log(res)
}, err => {
  console.log(err)
})
