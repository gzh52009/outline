import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  // 把路由注入根实例
  router,
  render: h => h(App),
}).$mount('#app')
