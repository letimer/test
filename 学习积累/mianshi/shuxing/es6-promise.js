//问？了解promise吗，说一说你对它的了解
//答：了解
//1.promise是异步编程的解决方案（还有generator,async/await），有三种状态,pending,resolved,rejected
//2.promise的特点是只有异步操作的结果，可以决定是哪一种状态任务其它操作都不会改变这个状态

//问？promise解决的痛点是啥
//答：1.回调地狱（常规使用的是嵌套回调，代码臃肿，可读性差）
//2.promise可以支持多个并发请求，获取并发请求中的数据
//3.promise可以解决可读性的问题，异步的嵌套带来的可读性的问题

//问？promise解决的痛点还有其它方法可以解决嘛
//答：有
//1.setTimeout(只有在执行栈中的代码执行完才会去读取任务队列)
//2.generator函数（异步操作表示的很简单，但是流程管理不方便）
//3.async和await
// async和await两种语法结合可以让异步代码像同步代码一样
//     async函数：
//     1.async函数的返回值为promise对象，
//     2.promise对象的结果由async函数执行的返回值决定。
//     await表达式：它的右侧表达式一般是promise对象，获取promise成功的结果

