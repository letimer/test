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
    },
    actions:{
    },
    getters:{
    },
    modules:{}

})
//3.导入store
export default store