/**
 * util.promisify方法
 */
//引入util模块
const util=require('util');
//引入fs模块
const fs=require('fs');
let mineReadFile=util.promisify(fs.readFile);
mineReadFile('content.txt').then(value=>{
    console.log(value.toString());
});