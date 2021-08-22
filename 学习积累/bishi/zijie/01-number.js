//原始=>包装
//包装=>原始 (new Number(1)).valueOf()->返回对象的值
console.log(String("1")==="1");//true
console.log(new Number(2)===2);
console.log((new Number(2)).valueOf()===2);

console.log(parseFloat(0.6)===0.6);//true
console.log(Math.round(0.6)===0.6);//false
console.log(parseFloat(0.6).toPrecision()===0.6);//false
console.log(parseFloat(0.6).toFixed(1)===0.6);//false
