const express=require('express')
const app=express();

app.all('/check-name',(request,response)=>{
    const data={
        exist:1,
        msg:'用户名已经存在'
    };
    //将数据转换为字符串
    let str=JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});
app.all('/jquery-jsonp',(request,response)=>{
    const data={
        name:'尚硅谷',
        city:['北京','上海','深圳']
    };
    //将数据转换为字符串
    let str=JSON.stringify(data);
    //接收callback参数
    let cb=request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
});
app.listen(7000,()=>{
    console.log("服务启动");
})