<template>
  <div id="app">
    <!-- 
    <router-link tag="button" to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view> 
    <button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于</button>
    <button @click="linkToUser">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view> 
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:"lisi",
      imgUrl:'http://www.baidu.com/log.png'
    }
  },
  methods:{
    // linkToHome(){
    //   this.$router.push("/home")
    // },
    // linkToAbout(){
    //   this.$router.push("/about")
    // },
    // linkToUser(){
    //   this.$router.push("/user")
    // }
  }
}
</script>

<style>
.active{
  color:"#f00"
}
</style>
