import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
//1.axios的基本使用
// axios({
//   url:"http://123.207.32.32:8000/home/multidata",
//   //专门对get请求进行拼接
//   params:{
//     type:"pop",
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })

//2.axios发送并发请求
// axios.all([axios({
//   url:"http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url:"http://123.207.32.32:8000/home/data",
//   params:{
//     type:'sell',
//     page:4
//   }
// })])
//axios.all([])返回的结果是一个数组，使用axios.spread可以将数组[res1,rea2]展开为res1,res2
// .then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// //4.创建axios的实例
// const instance1=axios.create({
//   baseURL:'http://222.111.33.33:8000',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })
// instance1({
//   url:"/home/data",
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })


//5.封装一个request模块
import { request } from './network/request';

request({
  url: '/home/multidata'
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
