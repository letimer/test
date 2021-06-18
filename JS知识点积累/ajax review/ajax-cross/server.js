const express=require('express')
const app=express();
app.get('/home',(request,response)=>{
    //响应一个页面
    response.sendFile(__dirname+'/index.html')
});
app.get('/data',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.send('用户数据')
});
app.listen(9000,()=>{
    console.log("服务启动");
})