//如果不添加.then方法则会报错说p.then不是一个函数
//因为在下面的显示原型中没有then方法，所以实例中的then方法也没有
function Promise(executor){

}
//添加then方法
 Promise.prototype.then=function(onResolved,onRejected){
 }