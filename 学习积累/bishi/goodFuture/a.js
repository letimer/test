// let s=new Set();
// s.add(1);
// s.add(1);
// console.log(s.size);

// 'use strict'
// function f1(){
//     console.log(this);
// }
// f1();
//undefined

// var val='test';
// console.log('value is'+(val==='test')?'some':"no");//some
// //算术运算>关系运算>逻辑运算，所以上述代码相当于：
// //1'value is true'
// //2.Boolean('value is true')
// //3.为true,所以是some


// var i;
for(i=1;i++<10;){
    console.log(i);
}
// console.log(i);//11

// console.log(Array.isArray(Array.prototype));//true

// console.log(Object.is([],[]));//false
// console.log(Object.is(NaN,NaN));//true


// console.log(Boolean(''));