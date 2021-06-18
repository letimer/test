//1.引入express
var express=require('express')

//2.创建应用对象
const app=express()

//3.配置路由规则
app.get('/express-json',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin',"*")
    //设置响应内容
    response.send('hello express get')
})
//因为自定义了请求头（iframe-post），所以要设置接收各种请求头，再加上会发送options请求，所以将Post改为all
app.all('/express-json',(request,response)=>{
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin',"*")
    //使得接收各种请求头
    response.setHeader('Access-Control-Allow-Headers','*')
    //响应一个数据
    const data={
        name:"atguigu"
    }
    //进行对字符串的转换
    let str=JSON.stringify(data);
     //设置响应内容
     response.send(str)

})

//延时响应
app.get('/delay',(request,response)=>{
    //设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin',"*")
    setTimeout(()=>{
        //设置响应体
        response.send('延时调用');
    },3000)
})

//jquery服务
app.all('/jquery',(request,response)=>{
    //设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin',"*")
        const data={name:"尚硅谷"}
        response.send(JSON.stringify(data))

    //用来测试timeout
    // response.setHeader('Access-Control-Allow-Origin',"*")
    // setTimeout(()=>{
    //     const data={name:"尚硅谷"}
    //     response.send(JSON.stringify(data))
    // },3000)
})

//axios服务
app.all('/axios',(request,response)=>{
    //设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin',"*")
    response.setHeader('Access-Control-Allow-Headers','*')
        const data={name:"尚硅谷"}
        response.send(JSON.stringify(data))
})

app.all('/fetch',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin',"*")
    response.setHeader('Access-Control-Allow-Headers','*')
    const data={name:"尚硅谷"}
        response.send(JSON.stringify(data))
})

//4.监听
app.listen(8000,()=>{
    console.log('监听服务已经启动！！');
})