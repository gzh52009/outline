// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
   data: {
    username:'jingjing',
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-4'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    superstar:['赵四','张飞','关羽','刘玄德'],
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },
  changeUsername(event){
    // console.log('event=',event)
    this.setData({
      username: event.detail.value
    })
  },
  displayFor(){
    this.setData({
      show:!this.data.show
    })
  },
  goto(e){
    console.log('e',e)
    const {url} = e.currentTarget.dataset;
    wx.reLaunch({
      url
    })
  }
})