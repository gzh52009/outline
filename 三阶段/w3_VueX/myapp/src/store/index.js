import Vue from 'vue';
import Vuex from 'vuex';
import request from '../utils/request'

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
    },
    actions:{
      changeQtyAsync(context,payload){
        // context 类似store的对象
        request.get(`/goods/${payload._id}/kucun`).then((res)=>{
          console.log('kucun',res.data);
          let qty = payload.qty;
          let kucun = res.data.data;
          if(qty > kucun){
            qty = kucun;
            this._vm.$message({
              message: '库存不足',
              type: 'error'
            });
          }
          context.commit('changeQty',{_id:payload._id,qty})
        })
      }
    }
})

console.log('store',store);

export default store;