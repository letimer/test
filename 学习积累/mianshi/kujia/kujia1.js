function debunde(handler,delay){
    //handler是要传入的进行防抖的函数，delay是等待时间
    var timer=null;
    return function (){
        var _self=this,
        args=arguments;
        clearTimeout(timer);
        timer=setTimeout(function(){
            //重新开启定时器
            handler.apply(_self,args);
        },delay);
    }
}


//节流：预定一个函数只有在大于等于执行周期才会执行，周期内不执行
function throttle(handler,wait){
    var lasttime=0;
    return function(){
        //获取当前时间
        var nowTime=new Date().getTime();
        if(nowTime-lasttime>wait){
            handler.apply(this.arguments);
            lasttime=nowTime
        }
    }
}
/*
 * @function throttle 函数节流
 * @param {Function} fn 需要节流的函数
 * @param {Number} interval 间隔时间
 * @return {Function} 经过节流处理的函数
 * 
 */


 function throttle(fn, interval) {
    let timer = null; // 定时器
    let firstTime = true; // 判断是否是第一次执行
    // 利用闭包
    return function() {
        // 拿到函数的参数数组
        let args = Array.prototype.slice.call(arguments, 0);
        // 拿到当前的函数作用域
        let _this = this;
        // 如果是第一次执行的话，需要立即执行该函数
        if(firstTime) {
            // 通过apply，绑定当前函数的作用域以及传递参数
            fn.apply(_this, args);
            // 修改标识为null，释放内存
            firstTime = null;
        }
        // 如果当前有正在等待执行的函数则直接返回
        if(timer) return;
        // 开启一个倒计时定时器
        timer = setTimeout(function() {
            // 通过apply，绑定当前函数的作用域以及传递参数
            fn.apply(_this, args);
            // 清除之前的定时器
            timer = null;
            // 默认300ms执行一次
        }, interval || 300)
    }
}