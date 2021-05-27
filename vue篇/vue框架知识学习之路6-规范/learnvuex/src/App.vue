<template>
  <div id="app">
    <h2>-----app内容-----</h2>
    <h2>{{$store.state.counter}}</h2>
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
    <h2>-----hellovuex内容-----</h2>
    <HelloVuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data (){
    return {
      message: '我是APP组件',
      // counter:0
    }
  },
  methods:{
    addtion(){
      this.$store.commit("increment")
    },
    subtion(){
      this.$store.commit('decrement')
    },
    addcounter(counter){
      this.$store.commit('increcounter',counter)
    },
    addstu(){
      const stu={id:114,name:'allen',age:35}
      this.$store.commit('addstudent',stu)
    }
  }
}
</script>
<style>

</style>
