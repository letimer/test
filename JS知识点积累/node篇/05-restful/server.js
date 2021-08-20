var express = require('express');
var app = express();
var fs = require("fs");


//1.展示用户列表
app.get('/listUsers', function (req, res) {
   fs.readFile(__dirname+"/user.json",'utf-8',function (err, data) {
       console.log(data);
       res.end(data);
   });
})

//2.添加用户信息
var user={
  "user4":{
    "name":"haha",
    "password":"password4",
    "profession":"teacher",
    "id":4
  }
}
app.get('/addUsers',function(req,res){
  fs.readFile(__dirname+"/user.json",'utf-8',function(err,data){
    data=JSON.parse(data);
    data["user4"]=user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  })
})

//3.查看某个具体的用户
app.get('/:id',function(req,res){
  fs.readFile(__dirname+"/user.json",'utf-8',function(err,data){
    data=JSON.parse(data);
    var user=data['user'+req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  })
})

//4.删除某个用户
app.get('/deleteUser/:id',function(req,res){
  fs.readFile(__dirname+"/user.json",'utf-8',function(err,data){
    data=JSON.parse(data);
    delete data['user'+req.params.id];
    res.end(JSON.stringify(data));
  })
})


//使用localhost自定义主机号
var server = app.listen(2001, "localhost",function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})