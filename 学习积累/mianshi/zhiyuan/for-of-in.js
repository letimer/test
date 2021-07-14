//for  of是es6新增的遍历方式，返回的是各项的值
let arr=[1,2,3,4,5]


//1.for of是遍历获取数组的属性，for in会遍历获取属性值
for(let i of arr){
    console.log(i);
}
//结果输出12345，如果是In则输出01234

//2.for in会遍历对象的键名以及会遍历对象的整个原型链，性能差不推荐使用，而for of只遍历当前对象
let arr2=[{a:1},{a:2},{a:3}]
let obj={}
for({a:obj.a} of arr2){
    console.log(obj.a);
}
//arr2数组每次使用for of循环都返回一个对象，经过对象的解构
//寻找属性为a的值，赋值给obj.a,所以在每轮循环时Obj.a都会被赋值为1,2,3
