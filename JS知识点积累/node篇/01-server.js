//请求Node.js自带的http模块,并且将其赋值给http变量
const http=require('http');
http.createServer(function(req,res){
    //返回的响应头，如状态码，内容类型
    res.writeHead(200,{'Content-Type':'text/plain'})

    //发送响应数据
    res.end("hello world");
}).listen(2000,function(){
    console.log("服务器已经启动,http://127.0.0.1:2000/");
})