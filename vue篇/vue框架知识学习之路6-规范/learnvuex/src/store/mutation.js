import {INCREMENT} from '../store/mutations-types';
export default {

    //方法并且方法中默认有一个state
    [INCREMENT](state){
        state.counter++
    },
    decrement(state){
        state.counter--
    },
    //第一种风格
    // increcounter(state,counter){
    //     // state.counter+=counter
    //     console.log(counter);
    // },
    increcounter(state,payload){
       state.counter+=payload.counter
    },
    addstudent(state,stu){
        state.students.push(stu)
    },
    updateinfos(state){
        // state.info.name="location"
        // state.info['address']="北京"

        //可将其加入响应式系统
        // Vue.set(state.info,'address','洛杉矶')
        // Vue.delete(state.info,'age')

        state.info.name="coderwhy"
    }
}