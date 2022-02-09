// 字符串ES6中添加了遍历器接口，  可以被 for of循环遍历

const str = 'code'
for (const codePoint of str) {
  console.log(codePoint)
}
