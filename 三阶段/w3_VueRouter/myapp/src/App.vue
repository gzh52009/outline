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
              >{{ item.text }}</el-menu-item
            >
          </el-menu>
        </el-col>
        <el-col :span="8" style="text-align:right;line-height:">
          <el-button type="text" @click="goto('/reg')">注册</el-button>
          <el-button type="text" @click="goto('/login')">登录</el-button>
        </el-col>
      </el-row>
      
    </el-header>
    <el-main>
      <!-- router-view组件用来显示路由组件 -->
      <!-- <router-view name="header" />
      <router-view name="main" /> -->
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          path: "/home",
          text: "首页",
        },
        {
          path: "/discover",
          text: "发现",
        },
          {
            path: "/mine",
            text: "我的",
          },
      ],
      current: "/home",
    };
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
    }
  },
  components: {},
  mounted(){
      // 这里的代码会自动执行
      // 获取当前路由信息
      let {path} = this.$route;
      this.current = path;
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}



.price{
  del{
    color:#999;margin-right:5px;
    &::before{
      content:'￥'
    }
  }
  span{
    color:#f00;
    &::before{
      content:'￥'
    }
  }
}

.menu-item {
  margin: 0 5px;
}
.current {
  color: #f00;
  font-weight: bold;
}
</style>
