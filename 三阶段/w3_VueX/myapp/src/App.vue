<template>
  <el-container>
    <el-header style="background-color:#545c64">
      <el-row type="flex" align="middle">
        <el-col :span="16">
          <!-- <router-link :to="item.path" exact-active-class="current" class="menu-item" v-for="item in menu" :key="item.path" event="mouseover" tag="li">{{item.text}}</router-link> -->
          <el-menu
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="current"
            router
          >
            <el-menu-item
              :index="item.path"
              v-for="item in menu"
              :key="item.path"
              >
              <el-badge :value="cartlength" class="cart-badge" v-if="item.path==='/cart'">
                <i :class="item.icon"></i>
                {{ item.text }}
              </el-badge>
              <template v-else>
                <i :class="item.icon"></i>
                {{ item.text }}
              </template>
              </el-menu-item
            >
          </el-menu>
        </el-col>
        <el-col :span="8" style="text-align:right;">
          <template v-if="isLogin">
            <el-button type="text" @click="goto('/mine')">{{userInfo.username}}</el-button>
            <el-button plain size="mini" @click="logout">退出</el-button>
          </template>
          <template v-else>
            <el-button type="text" @click="goto('/reg')">注册</el-button>
            <el-button type="text" @click="goto('/login')">登录</el-button>
          </template>
        </el-col>
      </el-row>
      
    </el-header>
    <el-main>
      <!-- <Lifecycle v-if="show"/>
      <button @click="show=!show">show/hide</button> -->
      <!-- router-view组件用来显示路由组件 -->
      <!-- <router-view name="header" />
      <router-view name="main" /> -->
      <router-view />

    </el-main>
  </el-container>
</template>

<script>
import Lifecycle from './components/Lifecycle.vue'
export default {
  name: "App",
  data() {
    return {
      // show:true,
      menu: [
        {
          path: "/home",
          text: "首页",
          icon:'el-icon-s-home'
        },
        {
          path: "/discover",
          text: "发现",
          icon:'el-icon-view'
        },
        {
          path: "/cart",
          text: "购物车",
          icon:'el-icon-shopping-cart-2'
        },
          {
            path: "/mine",
            text: "我的",
            icon:'el-icon-user'
          },
      ],
      current: "/home",
    };
  },
  computed:{
    cartlength(){
      return this.$store.state.goodslist.length
    },
    isLogin(){
      return this.$store.getters.isLogin
    },
    userInfo(){
      return this.$store.state.userInfo;
    }
  },
  watch:{
    '$route.path':function(newVal,oldVal){
      // console.log(newVal,oldVal)
      this.current = newVal
    }
  },
  methods: {
    changeMenu(index) {
      // 编程式导航
      this.$router.push(index);
    },
    goto(path){
      this.$router.push(path);
    },
    logout(){
      this.$store.commit('logout');
    }
  },
  components: {
    Lifecycle
  },
  mounted(){
    console.log('App=',this);
      // 这里的代码会自动执行
      // 获取当前路由信息
      let {path} = this.$route;
      this.current = path;

      console.log('App.$store',this.$store)
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}



.price{
  > del{
    color:#999;margin-right:5px;
    &::before{
      content:'￥'
    }
  }
  > span{
    color:#f00;
    &::before{
      content:'￥'
    }
  }
}
.cart-badge{
  sup.el-badge__content.is-fixed{top:15px;right:5px;}
}
.menu-item {
  margin: 0 5px;
}
.current {
  color: #f00;
  font-weight: bold;
}
</style>
