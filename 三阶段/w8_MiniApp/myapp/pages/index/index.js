// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo:{

    }
  },
  onLoad(){
    // 获取用户授权信息
    wx.getSetting({
      success:(res)=>{
        console.log('授权信息=',res);
        if(res.authSetting['scope.userInfo']){
          // 首次获取用户信息必须通过用户主动点击按钮来实现，只有用户授权后才可以通过wx.getUserInfo获取到用户信息
          wx.getUserInfo({
            success:(res)=>{
              console.log('res=',res);
              this.setData({
                userInfo:res.userInfo
              })
            }
          })

        }
      }
    })
  },
  getUserInfo(e){
    console.log(e);
  }
})
