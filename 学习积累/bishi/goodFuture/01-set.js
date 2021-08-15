//声明一个空set
var s=new Set();

//一个非空set
var s2=new Set(['你好','我好']);
//输出s2的内容
console.log(s2);

//添加新元素，如果是解构中重复了的，那么将添加不进去，结构长度不发生改变
s2.add('大家好');
console.log(s2.size);

//删除某个元素
s2.delete('你好');
console.log(s2);

s2.clear();
console.log(s2);


//示例1如下：
var arr=[1,2,3,4,1,2];
//将数组放在set中，会去除数组中的重复元素，再将其解构输出
console.log(...new Set(arr));
