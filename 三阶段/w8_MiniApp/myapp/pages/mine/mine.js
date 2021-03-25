// pages/mine/mine.js
const app = getApp();
console.log('app=',app);
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('Mine.onLoad',options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('Mine.onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('Mine.onShow')

    // 设置tabbar高亮
    const tabbar = this.getTabBar();
    tabbar.setCurrent(1)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('Mine.onHide')
  },  

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('Mine.onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})