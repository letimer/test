<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/Home1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/Home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">>
        <img slot="item-icon" src="../assets/img/tabbar/Category1.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/Category.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">>
        <img slot="item-icon" src="../assets/img/tabbar/Cart1.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/Cart.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/users" activeColor="black">>
        <img slot="item-icon" src="../assets/img/tabbar/User1.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/User.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from "components/tabbar/TabBar"
import TabBarItem from "components/tabbar/TabBarItem"

export default {
    name:"MainTabBar",
     components: { 
     TabBar,
     TabBarItem
   }
}
</script>
