  // 防抖和节流？应用场景，如何实现？
        // 场景：
        // 防抖：实时搜索拖拽
        // 节流：抢购时疯狂点击，页面滚动
        // 如何实现
        // 防抖：每一次都要清空定时器，重新设置上计时器值，使得计时器每一次都重新开始，直到满足所有条件并且等待延迟时间才执行函数
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