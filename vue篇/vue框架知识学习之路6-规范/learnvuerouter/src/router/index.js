// 配置路由相关的信息
import VueRouter from 'vue-router'
// 通过Vue.use（插件）,安装插件，因为没有Vue,所以导入import Vue from 'vue'
import Vue from 'vue'

import Home from "../components/Home"
import About from "../components/About"

// 1.安装插件
Vue.use(VueRouter)

//将routes单拎出来，方便编写和阅读
const routes=[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]
// 2.创建VueRouter对象
const router=new VueRouter({
  // 配置路径和组件之间的映射关系
  routes
})

// 3.将router对象传入到Vue实例,将其导出
export default router



//该文件中原始的代码如下
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// //安装插件
// Vue.use(VueRouter);
// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


