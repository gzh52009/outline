// pages/test/test.js

const format = require('../../utils/format');
console.log('format=',format);

import format2 from '../../utils/format'
console.log('format2',format2);

// require ESModule模块，引入的是整个模块对象
const request = require('../../utils/request').default
console.log('request',request);

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
    show:false,
    photo:''
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
  },
  scanCode(e){
    console.log(e)
  },
  takePhoto(){
    const cmr = wx.createCameraContext();

    cmr.takePhoto({
      success:(res)=>{
        wx.showToast({
          title:'拍照成功'
        })
        console.log(res.tempImagePath);
        wx.saveImageToPhotosAlbum({
          filePath:res.tempImagePath,
          success(){
            wx.showToast({
              title: '保存到相差成功',
              icon:'none'
            })
          }
        })
        this.setData({
          photo:res.tempImagePath
        })
      } 
    })
  },
  startVideo(){

  },
  fromatDate(d){
    return '2020-3-25';
  }
})