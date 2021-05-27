import Vue from 'vue'
import Vuex  from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建一个对象
const store=new Vuex.Store({
    //state对应一个对象
    state:{
        counter:10
    },
    mutations:{
        //方法并且方法中默认有一个state
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }
    },
    actions:{
    },
    getters:{
    },
    modules:{}

})
//3.导入store
export default store