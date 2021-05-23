<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:false
        }
      },
      computed:{
          isActive(){
              //$route指的是当前活跃的路由
              //下面这条语句的意思是判断当前活跃路由的path当中是否包含该tabbaritem的path,
              //如果包含，则isActive的值为true
              return this.$route.path.indexOf(this.path)!==-1
          },
          activeStyle(){
              return this.isActive?{color:this.activeColor}:{}
          }
      },
      methods:{
          itemClick(){
              this.$router.replace(this.path)
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
    /* .active{
        color:red;
    } */
</style>
