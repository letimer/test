//引入事件模块
const events=require('events');
//创建eventsEmitters对象
var eventsEmitters=new events.EventEmitter();
var connentHandler=function connected(){
    console.log("连接成功");
    //触发data_received事件
    eventsEmitters.emit("data_received")
}
//绑定连接事件
eventsEmitters.on("connection",connentHandler);

//绑定匿名事件
eventsEmitters.on("data_received",function(){
    console.log("数据接收成功");
})

//触发事件
eventsEmitters.emit("connection");

console.log("执行完毕");


