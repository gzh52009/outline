import Vue from 'vue';
import Vuex from 'vuex';

import user from './user'
import cart from './cart'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      username:'laoxie'
    },
    // vuex模块化
    modules:{
      user,
      cart
    }
})

console.log('store',store);

export default store;