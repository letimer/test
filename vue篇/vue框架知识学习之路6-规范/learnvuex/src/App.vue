<template>
  <div id="app">
    <h2>-----app内容-----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtion">-</button>
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
    }
  }
}
</script>
<style>

</style>
