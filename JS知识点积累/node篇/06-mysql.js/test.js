var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:"3306",
    password:"991230",
    database:"mysql"
})

connection.connect();

//查找
var sql="SELECT * FROM websites";
connection.query(sql,function(err,data){
    if(err){
        console.log("select error"+err.message);
        return;
    }
    console.log(data);
})
// connection.end();

//添加
var addSql="INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)";
var addParams=['菜鸟工具','http://cainiaogongjv.com',"22",'CN']
connection.query(addSql,addParams,function(err,data){
    if(err){
        console.log("err-message"+err.message);
        return;
    }else{
        //输出的插入结果：
        console.log(data);
    }
})
// connection.end();

//更新
var modSql="UPDATE websites SET name = ?,url = ? WHERE Id = ?";
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
connection.query(modSql,modSqlParams,function(err,result){
    if(err){
    console.log("err message"+err.message);
    return ;
    }else{
        console.log("update信息："+result.affectedRows);
    }
})