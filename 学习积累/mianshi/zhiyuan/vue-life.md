1.生命周期：从创建到销毁的过程 
    开始创建——初始化数据——编译模板——挂载dom——渲染-更新或者说销毁的一系列过程

2.生命周期钩子
    是在生命周期某一阶段执行的已定义的方法

3.第一次页面加载
    第一次页面加载会触发beforecreate/created和mount/mounted

4.周期过程简单示意
     # beforecreate  ------el元素：undefined,data数据:undefined
     # created       ------el元素：undefined,data数据：初始化
     # beforemount   ------el元素：初始化，data数据：初始化  （生成了html，但是没有挂载）
     # mounted       ------用编译完后的html内容替换el属性，进行ajax的交互，进行页面的渲染（简而言之就是挂载）
     # beforeupdate  ------在数据更新 之前 调用，发生在虚拟dom重新渲染和打补丁之前调用
     # update        ------调用时，组件dom已经更新，所以可以执行依赖于dom的操作。
     # beforedestory ------销毁前调用，此时实例依旧可用
     # destoryed     ------在销毁事件监听器等之后调用

5.数据双向绑定 （数据劫持+发布者-订阅者模式）
  通过Object.defineProperty（）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
                                
                                通知更新

                                ————》

  observe     ——》      dep                watcher

   观察者   通知更新     发布者  《————       订阅者

                                 添加订阅
                                 
# var obj={}
# 参数1是obj,参数2是定义或者修改的对象的属性名，参数3是属性描述符(get和set是属于存取描述符的对象属性)

Object.defineProperty(obj,'txt',{
    get:function(){
        return obj
    },
    set:function(newValue){
        document.getElementById('txt').value=newValue
    }
})