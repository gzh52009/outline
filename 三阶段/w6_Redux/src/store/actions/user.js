/**
 * Action Creator: 用于创建action的函数
 */
export const LOGIN = 'login'
export const LOGOUT = 'logout'
export const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD'
export const UPDATE_USER_AVATAR = 'UPDATE_USER_AVATAR'


export function login(user){
    return {
        type:LOGIN,
        user
    }
}

export function logout(){
    return {
        type:LOGOUT
    }
}

export function changePassword(password){
    return {
        type:CHANGE_USER_PASSWORD,
        password
    }
}
export function changeAvatar(avatar){
    return {
        type:UPDATE_USER_AVATAR,
        avatar
    }
}

export default {
    login,
    logout,
    changePassword,
    changeAvatar,
}