//对非数组对象类型进行遍历
const obj={
    "name":"haha for in",
    "sex":"male"
}
Object.defineProperty(obj,"age",{value:18,enumerable:false})//增加不可枚举的属性age
Object.prototype.proto1=function(){console.log("name is haha for in");}//通过原型链添加一个函数属性
Object.prototype.proto2=2//通过原型链增加属性，为一个整型2

//1.for in遍历:遍历自身和继承自原型链的可枚举属性
console.log("for in:");
for(var a in obj)
console.log(a);//name,sex,proto1,proto2
//总结：for in遍历可枚举属性（包括自有属性和继承自原型链的属性）


//2.Object.keys返回一个数组，为对象  自有  的可枚举的属性
console.log("object.keys:");
console.log(Object.keys(obj));//【‘name’,‘sex’】
//总结：Object.keys遍历自身的可枚举属性

//3.object.getOwnProperty
console.log("object.getOwnProperty:");
console.log(Object.getOwnPropertyNames(obj));//【‘name’,‘sex’,‘age’】
//总结：Object.getOwnProperty遍历  自身  属性，包括可枚举和不可枚举


//对数组对象的遍历
var arr=[1,2,3,4,5,6,7];
for(var a in arr)
console.log(a);//arr的索引值0 1 2 3 4 5 6

console.log(Object.keys(arr));//['0', '1', '2','3', '4', '5','6'],arr的索引值

console.log(Object.getOwnPropertyNames(arr));//[ '0', '1', '2', '3', '4', '5', '6', 'length'(数组长度属性值) ]



