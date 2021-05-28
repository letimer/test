import Vue from 'vue'
import Vuex  from 'vuex'
import mutations from "./mutation"
import actions from "./actions"
import getters from "./getters"
import moduleA from "./modules/moduleA"

//1.安装插件
Vue.use(Vuex)

//2.创建一个对象
const state={
    counter:10,
    students:[
        {id:1,name:'张三',age:18},
        {id:2,name:'李四',age:19},
        {id:3,name:'王五',age:20},
        {id:4,name:'小六',age:21}
    ],
    info:{
        name:"letimer",
        age:30
    }
}
const store=new Vuex.Store({
    //state对应一个对象
    state,
    modules:{
        a:moduleA
    },
    mutations,
    actions,
    getters
})
//3.导入store
export default store