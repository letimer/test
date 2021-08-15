var val='test';
console.log('value is'+(val==='test')?'some':"no");//some
//算术运算>关系运算>逻辑运算，所以上述代码相当于：
//1'value is true'
//2.Boolean('value is true')
//3.为true,所以是some