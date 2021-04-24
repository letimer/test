//作为文件入口，源文件
//将引出的模块进行引入（采用的是commonJs的模块规范）
const {add,mul}=require("./mathUtils")


console.log(add(20,30));
console.log(mul(20,30));

//es6规范导入
import {name,age,height} from "./info.js"
console.log(name)
console.log(age)
console.log(height)