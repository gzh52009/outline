import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import store from './store'
import router from './router';
import request from './utils/request'

import 'element-ui/lib/theme-chalk/index.css';




// 把ajax请求方法挂在Vue的
Vue.prototype.$request = request;

Vue.use(ElementUI);
Vue.config.productionTip = false

// store.commit('add',goods)
// store.commit({type:'add',goods})

new Vue({
  // 把路由注入根实例
  router,
  // 把store注入根实例
  store,
  render: h => h(App),
}).$mount('#app')
