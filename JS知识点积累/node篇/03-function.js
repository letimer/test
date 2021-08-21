//函数传递在Http服务器上的工作
const http=require('http');

var onrequest=function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("hello world");
    res.end();
}

http.createServer(onrequest).listen(2100,function(){
    console.log('http://127.0.0.1:2100');
})