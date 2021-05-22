<template>
    <div>
        <h2>我是用户</h2>
        <p>我是用户内容</p>
        <h2>{{$route.params.id}}</h2>
    </div>
</template>
<script>
export default {
    name:"User",

    computed:{
        userId(){
            //$route指的是当前的活跃的路由，哪个活跃就是哪个
            return this.$route.params.id
        }
    },
    created(){
        console.log('created');
        document.title="用户"
    }
}
</script>
