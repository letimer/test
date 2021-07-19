## 安恒实习的预面试

1.垂直居中

2.bfc,怎么触发
float不为None
position脱离文档流
overflow不为hidden

3.深拷贝原理，如何拷贝对象中的函数

4.promise,怎么取消一个promise
pending或者抛出错误

5.es6模块化，与commonJS区别，import和require有什么区别
import相当于一个解构过程，编译时调用，所以要放在文件开头
require则是运行时调用（理论上可以放在运用在代码上的任何地方），而且是一个赋值过程

6.css选择器有哪些，优先级？
基本：标签，id，class，通配
高级：后代，交际，并集，伪类

7.js获取原生dom元素的方法？类数组？
byID
byclassName
bytagName
byname
querySlector(第一个)
querySlectorAll(数组)

8.遍历数组和遍历对象的方法？
对象：（for..in,
       Object.keys(返回key数组),
       Object.values(返回value数组)）
数组： forEach,
      some,every(参数为当前循环元素，该元素下标，数组本身)
      for..of