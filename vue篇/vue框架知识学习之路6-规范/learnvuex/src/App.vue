<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
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
      counter:0
    }
  }
}
</script>
<style>

</style>
