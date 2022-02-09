const name = 'lesenelir', age = 18
const person = {
  name,
  age,
  say() {
    console.log(this.name)
  }
}

// 属性的遍历：
// 1. for in 遍历
for (const personKey in person) {
  console.log(personKey)
}

// 2. Object.keys(obj)
for (const key of Object.keys(person)) {
  console.log(key)
}
// Note： for of 更多用于 数组、字符串、set、map


// __proto__属性，用来读取和设置当前对象的原型对象


// 对象的遍历
let obj = {foo: 'bar', baz: 42}
for (const key of Object.keys(obj)) {
  console.log(key)
}

for (const value of Object.values(obj)) {
  console.log(value)
}

for (const entry of Object.entries(obj)) {
  console.log(entry)
}

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value)
}

