import {name, age, sayName} from './module/testMovieContent.js'

/*
*   Note:   ES6 模块化导入坑点：
*             1. package.json 要设置 "type":module
*             2. ES6导入模块要设置.js的下标，不设置会出错
* */

console.log(name)
console.log(age)
console.log(sayName)


