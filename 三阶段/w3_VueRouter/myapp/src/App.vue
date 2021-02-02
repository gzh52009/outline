<template>
  <div>
    <router-link :to="item.path" exact-active-class="current" class="menu-item" v-for="item in menu" :key="item.path" event="mouseover" tag="li">{{item.text}}</router-link>
    
    <!-- router-view组件用来显示路由组件 -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      menu:[
         {
          path:'/',
          text:'首页(Home)'
        },
        {
          path:'/home',
          text:'首页'
        },
        {
          path:'/login',
          text:'登录'
        },
        {
          path:'/reg',
          text:'注册'
        }
      ]
    }
  },
  components: {
    
  }
}
</script>

<style>
  .menu-item{
    margin:0 5px;
  }
  .current{color:#f00;font-weight:bold;}
</style>
