var name="小明"
var age=18
var flag=true
function sum(num1,num2){
    return num1+num2
}

if(flag){
    console.log(sum(20,30));
}

//将变量导出的写法示例一
export {
    flag,sum
}

//将变量导出的写法示例二
export var num1=1000;
export var height=1.88


//导出函数和导出类
export function mul(num1,num2){
    return num1+num2
}