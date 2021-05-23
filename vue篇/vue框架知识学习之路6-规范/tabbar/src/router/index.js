import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=> import('../views/Home/Home')
const Category=()=> import('../views/Category/Category')
const Cart=()=> import('../views/Cart/Cart')
const Users=()=> import('../views/Users/Users')
//安装插件
Vue.use(VueRouter)
const routes=[
    {
        path:'',
        redirect:'/home'
    },{
        path:'/home',
        component:Home
    },{
        path:'/cart',
        component:Cart
    },{
        path:'/category',
        component:Category
    },{
        path:'/users',
        component:Users
    }
]
const router=new VueRouter({
    routes
})
export default router