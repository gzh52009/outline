// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:113.33851371688844,
    latitude:23.176263231772545,
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        console.log('res=',res);
        const {longitude, latitude} = res;
        
        // 添加markers
        const marker = {
          id:1,
          longitude,
          latitude,
          title:"千锋教育",
          iconPath:"../../img/position.png",
          width:30,
          height:30,
        }
        this.setData({
          longitude,
          latitude,
          markers:[marker]
        })
      }
    })
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
  getPosition(e){
    const {longitude,latitude} = this.data;
    wx.openLocation({
      latitude,
      longitude,
      name:'千锋教育',
      address:'广州天河区元岗路200号慧通产业园B9'
    })
  }
})