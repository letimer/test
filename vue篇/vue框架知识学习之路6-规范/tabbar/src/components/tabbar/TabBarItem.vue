<template>
    <div class="tab-bar-item">
        <div v-if="!isActive"><slot v-if="!isActive" name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <slot :class="{active:isActive}" name="item-text"></slot>
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    data(){
        return{
            isActive:false
        }
      }
    }
</script>
<style scoped>
     .tab-bar-item{
      flex:1;
      text-align: center;
      justify-content: center;
      height:49px;
    }
      .tab-bar-item img{
          width:24px;
          height:24px;
    }
</style>
