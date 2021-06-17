//1.引入express
var express=require('express')

//2.创建应用对象
const app=express()

//3.配置路由规则
app.get('/',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin',"*")
    //设置响应内容
    response.send('hello express')
})

app.post('/',(request,response)=>{
     //设置响应头，允许跨域
     response.setHeader('Access-Control-Allow-Origin',"*")
     //设置响应内容
     response.send('hello express post')

})

//4.监听
app.listen(8000,()=>{
    console.log('监听服务已经启动！！');
})