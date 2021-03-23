// app.js
const request = function(url,data,options={}){
  return new Promise((resolve,reject)=>{
    wx.request({
      ...options,
      url: this.baseUrl + '/api' + url,
      data,
      success(res){
        resolve(res.data)
      },
      fail:reject
    })
  })
}
request.get = function(url,data,options={}){
  options.method = 'get';
  return request(url,data,options)
}
request.post = function(url,data,options={}){
  options.method = 'post';
  return request(url,data,options)
}
request.put = function(url,data,options={}){
  options.method = 'put';
  return request(url,data,options)
}
request.delete = function(url,data,options={}){
  options.method = 'delete';
  return request(url,data,options)
}


App({
  onLaunch() {console.log('App.onLaunch')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(options){
    console.log('App.onShow',options)
  },onHide(){
    console.log('App.onHide')
  },
  globalData: {
    userInfo: null
  },
  currentClass:{
    name:'h5-2009'
  },
  baseUrl:'http://120.76.247.5:2020',
  request
})

wx.setStorage({
  key:'currentUser',
  data:{username:'laoxie',password:1234}
})