// 封装框架 Proxy
// proxy: 代理
//    扩展（增强）对象的一些功能

// Proxy作用： vue中的拦截、预警、上报、扩展功能、统计、增强对象。
// Proxy是设计模式的一种，即：代理模式。

// proxy是给对象一层拦截器，外层对对象的访问，都会经过这层拦截器


// 语法: new Proxy(target, handler)
// handler: {set(){}, get(){}, deleteProperty(){}, has(){}, apply(){} }
// get(){}  用于拦截对象的读取方法
// set(){}  用于拦截对象的赋值操作


// let obj = new Proxy(被代理的对象，对代理的对象做什么操作)

let obj = {
  name: 'lesenelir'
}

let newObj = new Proxy(obj, {
  get(target, property, receiver) {
    // TODO
    // console.log(`您访问了${property}属性`)
    // console.log(target, property)
    if (property in target) {
      return target[property]
    } else {
      // throw new ReferenceError(`${property}属性不在此对象上`)
      console.warn(`${property}属性不在此对象上`)
    }
  }
})

console.log(newObj.name) // 此时property是name
console.log(newObj.age)




