import Vue from 'vue'
import App from './App.vue'

// VueRouter的使用
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
import Reg from './views/Reg.vue'
import Login from './views/Login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  // mode:'hash',
  routes:[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/reg',
        component:Reg
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        component:Home
    }
]
})

Vue.config.productionTip = false

new Vue({
  // 把路由注入根实例
  router,
  render: h => h(App),
}).$mount('#app')
