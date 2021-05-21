// 配置路由相关的信息
import VueRouter from 'vue-router'
// 通过Vue.use（插件）,安装插件，因为没有Vue,所以导入import Vue from 'vue'
import Vue from 'vue'

// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"
const Home=()=>import("../components/Home")
const HomeMessage=()=>import("../components/HomeMessage")
const HomeNews=()=>import("../components/HomeNews")
const About=()=>import("../components/About")
const User=()=>import("../components/User")

// 1.安装插件
Vue.use(VueRouter)

//将routes单拎出来，方便编写和阅读
const routes=[
  {
    //缺省路由，相当于默认时的路径
    path:'',
    //使得路径重定向
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        //注意，子路由的路径映射时这里不需要加/
        path:'homenews',
        component:HomeNews
      },
      {
        path:'homemessage',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/user/:abc',
    component:User
  }
]
// 2.创建VueRouter对象
const router=new VueRouter({
  // 配置路径和组件之间的映射关系
  routes,
  mode:'history',
  linkActiveClass:'active'
})

// 3.将router对象传入到Vue实例,将其导出
export default router



