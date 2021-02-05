import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 用户信息实现数据持久化
let userInfo = localStorage.getItem('userInfo');
try{
  userInfo = JSON.parse(userInfo) || {}
}catch(err){
  userInfo = {}
}


const store = new Vuex.Store({
    // 参数
    state:{
      userInfo,
      goodslist: [],
    },
    getters:{
      totalPrice(state){
        return state.goodslist.reduce((prev,item)=>prev+item.price*item.qty,0);
      },
      isLogin(state){
        return Boolean(state.userInfo._id)
      }
    },
    mutations:{
      add(state,goods){
        state.goodslist.unshift(goods);
      },
      remove(state,payload){
        state.goodslist = state.goodslist.filter(item=>item._id != payload._id)
      },
      changeQty(state,payload){
        // paload={_id,qty}
        state.goodslist = state.goodslist.map(item=>{
            if(item._id === payload._id){
                item.qty = payload.qty;
            }
            return item;
        })
      },
      clear(state){
        state.goodslist = []
      },
      login(state,userInfo){
        state.userInfo = userInfo;
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
      },
      logout(state){
        state.userInfo = {}
        localStorage.removeItem('userInfo')
      }
    }
})

export default store;