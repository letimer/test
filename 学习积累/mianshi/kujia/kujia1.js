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