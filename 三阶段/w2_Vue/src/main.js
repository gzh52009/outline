import Vue from 'vue'

import App from './App.vue';

new Vue({
  el:'#app',
  render:function(createElement){
      return createElement(App);
  }
})