//函数传递在Http服务器上的工作
const http=require('http');
const url=require('url');

function start(route){
    var onrequest=function(req,res){
        res.writeHead(200, {"Content-Type": "text/plain"});
        var pathname=url.parse(req.url).pathname;
        console.log("request for"+pathname+"received");
        route(pathname);
        res.write("hello world");
        res.end();
    }
    http.createServer(onrequest).listen(2200,function(){
        console.log('服务器启动http://127.0.0.1:2200');
    })
}

exports.start=start;