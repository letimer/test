//导出变量
//引入aaa.js中第一种方法导出的内容，注意：.js不能够简写
import {flag,sum} from "./aaa.js"
if(flag){
    console.log('小明简直是个天才');
    console.log(sum(20,30));
}


//引入第二种方法导出的内容
import {num1,height} from "./aaa.js";
console.log(num1);
console.log(height);


//出了导出变量之外，我们还能够导出类和函数