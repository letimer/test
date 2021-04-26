//如果不添加.then方法则会报错说p.then不是一个函数
//因为在下面的显示原型中没有then方法，所以实例中的then方法也没有
function Promise(executor){
    //添加属性
    this.PromiseState="pending";
    this.PromiseResult=null;

    //如果直接使用this,则在下面的函数声明当中，this指向window
    const self=this;

    //resolve 函数
    function resolve(data){
        // console.log(this);
        // console.log(self);

        //加一个判断，只有promise的状态为pending,才能够改变其状态
        if(self.PromiseState="pending")
        return;

        //1.修改对象状态(promisestate)
        self.PromiseState="fulfilled";
        //2.设置对象结果值(promiseresult)
        self.PromiseResult=data;
    }

    //reject函数声明
    function reject(data){
         //加一个判断，只有promise的状态为pending,才能够改变其状态
        if(self.PromiseState="pending")
        return;

        //1.修改对象状态(promisestate)
        self.PromiseState="rejected";
        //2.设置对象结果值(promiseresult)
        self.PromiseResult=data;
    }
    
    //获取抛出的错误
    try{
        //同步调用【执行器函数】
        executor(resolve,reject);

        //下面这个e是html文件当中抛出的error
        }catch(e){
            //修改promise对象状态为失败
            reject(e);
        }
}

//添加then方法
 Promise.prototype.then=function(onResolved,onRejected){
     //调用回调函数 PromiseState
     if(this.PromiseState==="fulfilled"){
         //html文件当中的then中的value保存在promiseresult当中
         onResolved(this.PromiseResult);
     }
     if(this.PromiseState==="rejected"){
        onRejected(this.PromiseResult);
     }
 }