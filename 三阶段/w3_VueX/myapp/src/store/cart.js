import request from '../utils/request'

export default {
    // namespaced: true, // 设置命名空间后，getters,mutations,actions的操作需要加上命名空间，如：store.commit('add')变成store.commit('cart/add')
    state: {
        goodslist: [],
    },
    getters: {
        totalPrice(state) {
            return state.goodslist.reduce((prev, item) => prev + item.price * item.qty, 0);
        },
    },
    mutations: {
        add(state, goods) {
            state.goodslist.unshift(goods);
        },
        remove(state, payload) {
            state.goodslist = state.goodslist.filter(item => item._id != payload._id)
        },
        changeQty(state, payload) {
            // paload={_id,qty}
            state.goodslist = state.goodslist.map(item => {
                if (item._id === payload._id) {
                    item.qty = payload.qty;
                }
                return item;
            })
        },
        clear(state) {
            state.goodslist = []
        },
    },
    actions: {
        changeQtyAsync(context, payload) {
            // context 类似store的对象
            request.get(`/goods/${payload._id}/kucun`).then((res) => {
                console.log('kucun', res.data);
                let qty = payload.qty;
                let kucun = res.data.data;
                if (qty > kucun) {
                    qty = kucun;
                    this._vm.$message({
                        message: '库存不足',
                        type: 'error'
                    });
                }
                context.commit('changeQty', { _id: payload._id, qty })
            })
        }
    },
}