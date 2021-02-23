// 用户信息实现数据持久化
let userInfo = localStorage.getItem('userInfo');
try {
    userInfo = JSON.parse(userInfo) || {}
} catch (err) {
    userInfo = {}
}

export default {
    
    // 参数
    state: {
        userInfo,
    },
    getters: {
        isLogin(state) {
            return Boolean(state.userInfo._id)
        }
    },
    mutations: {
        login(state, userInfo) {
            state.userInfo = userInfo;
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
        },
        logout(state) {
            state.userInfo = {}
            localStorage.removeItem('userInfo')
        }
    },
}