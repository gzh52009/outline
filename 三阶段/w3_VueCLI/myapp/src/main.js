// 这里引入的Vue为运行时版本vue.runtimer.js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // el,
  // template, vueCLI模式中不支持template配置，因为该模式采用的是Vue运行时版本
  // render: h => h(App),
  render:function(createElement){
    // 创建虚拟节点
    // <div id="box"><h4>xxxx</h4><ul><li><li></ul></div>
    // createElement('div',{id:'box'},[createElement('h4',null,'xxxx'),createElement('ul',null,[])])
    const obj = createElement(App)
    console.log(obj)
    return obj
  }
}).$mount('#app')

// $mount('#app') 等效于 el配置
