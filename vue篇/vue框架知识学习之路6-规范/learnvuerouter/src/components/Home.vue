<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页内容</p>
        <router-link to="/home/homenews">新闻</router-link>
        <router-link to="/home/homemessage">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    name:"Home"
}
</script>
<style scoped>

</style>
