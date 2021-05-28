<template>
  <div id="app">
    <h2>-----app内容:modules相关内容-----</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="upatename">修改名字</button>
    <h2>{{$store.getters.fullname1}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="mupdatename">异步修改名字</button>
    <h2>-----app内容:mutations相关-----</h2>
    <button @click="addtion">+</button>
    <button @click="subtion">-</button>
    <button @click="addcounter(5)">+5</button>
    <button @click="addcounter(10)">+10</button>
    <button @click="addstu">添加学生</button>
    <h2>-----app内容：getters相关信息-----</h2>
    <p>{{$store.getters.powerCount}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>{{$store.getters.more20stulen}}</p>
    <p>{{$store.getters.moreAgeStu(20)}}</p>
    <p>{{$store.getters.addanother}}</p>
    <h2>-----app内容：info内容是否为响应式的-----</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updateinfo">修改信息</button>
    <h2>-----hellovuex内容-----</h2>
    <HelloVuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './store/mutations-types'
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data (){
    return {
      message: '我是APP组件',
      counter:0
    }
  },
  methods:{
    // addtion(){
    //   this.$store.commit("increment")
    // },
    addtion(){
      this.$store.commit(INCREMENT)
    },
    subtion(){
      this.$store.commit('decrement')
    },
    addcounter(counter){
      //第一种风格，此时的counter只传入一个数值counter
      // this.$store.commit('increcounter',counter)

      //第二种风格，此时传入的是一个对象（属性counter为传入的参数，属性age为18）
      this.$store.commit({
      type:"increcounter",
      counter,
      age:18
      })
    },
    addstu(){
      const stu={id:114,name:'allen',age:35}
      this.$store.commit('addstudent',stu)
    },
    updateinfo(){
      // this.$store.commit("updateinfos")

      // this.$store.dispatch('aupdateinfos',{
      //   message:"我是携带的信息",
      //   success:()=>{
      //       console.log('执行完了');
      //   }
      // })


      this.$store
      .dispatch('aupdateinfos',"我是传递的信息")
      .then(res=>{
        console.log(res);
      })
    },
    upatename(){
      this.$store.commit("mupdatename","lisi")
    },
    mupdatename(){
      this.$store.dispatch('aupdatenames')
    }
  }
}
</script>
<style>

</style>
