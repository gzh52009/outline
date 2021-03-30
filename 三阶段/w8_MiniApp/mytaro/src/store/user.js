import { observable } from 'mobx'

const initState = {
  userInfo: {},
  isLogin:false,
  login(data){
    this.userInfo = data;
    this.isLogin = true;
  },
  logout(){
      this.userInfo = {}
      this.isLogin = false;
  }
}

const userStore = observable(initState)

export default userStore