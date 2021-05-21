<template>
    <div>
        <h2>我是用户</h2>
        <p>我是用户内容</p>
        <h2>{{userId}}</h2>
    </div>
</template>
<script>
export default {
    name:"User",
    computed:{
        userId(){
            //$route指的是当前的活跃的路由，哪个活跃就是哪个
            return this.$route.params.abc
        }
    }
}
</script>
