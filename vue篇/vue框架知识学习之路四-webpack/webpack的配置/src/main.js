//1.作为文件入口，源文件
//将引出的模块进行引入（采用的是commonJs的模块规范）
const {add,mul}=require("./js/mathUtils.js")


console.log(add(20,30));
console.log(mul(20,30));

//2.es6规范导入
import {name,age,height} from "./js/info.js"
console.log(name)
console.log(age)
console.log(height)

//3.依赖css文件
require("./css/normal.css")

//4.依赖less文件
require("./css/special.less");
//document.write("<h2>你好啊</h2>");

//5.使用vue进行开发
import Vue from 'vue'
import App from "./vue/App.vue"
new Vue({
    el:"#app",
    template:'<App/>',
    components:{
        App
    }
})