import Vue from 'vue'
import Vuex  from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建一个对象
const store=new Vuex.Store({
    //state对应一个对象
    state:{
        counter:10,
        students:[
            {id:1,name:'张三',age:18},
            {id:2,name:'李四',age:19},
            {id:3,name:'王五',age:20},
            {id:4,name:'小六',age:21}
        ]
    },
    mutations:{
        //方法并且方法中默认有一个state
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increcounter(state,counter){
            state.counter+=counter
        },
        addstudent(state,stu){
            state.students.push(stu)
        }
    },
    actions:{
    },
    getters:{
        powerCount(state){
            return state.counter*state.counter;
        },
         more20stu(state){
            return state.students.filter(s=>s.age>20)
       },
       //该传入的geeters方便我们拿其它的东西
       more20stulen(state,getters){
           return getters.more20stu.length
       },
       moreAgeStu(state){
           return function(age){
             return state.students.filter(s=>s.age>age)
           }
       }
    },
    modules:{}

})
//3.导入store
export default store