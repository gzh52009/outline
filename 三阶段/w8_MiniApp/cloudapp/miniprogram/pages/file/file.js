// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  pzupload(){console.log('pz')
  // wx.openSetting({
  //   //withSubscriptions: true,
  //   success (res) {
  //     console.log('auth=',res.authSetting)

  //   }
  // })
    const cmr = wx.createCameraContext();
    cmr.takePhoto({
      success({tempImagePath}){

        wx.cloud.uploadFile({
          cloudPath: 'gzh52009.png', // 上传至云端的路径
          filePath: tempImagePath, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            wx.showToast({
              title: '上传成功',
            })
          }
        })
      }
    })
  },
  xcupload(){
    wx.chooseImage({
      success({tempFilePaths,tempFiles}){
        console.log(tempFilePaths,tempFiles);
        wx.cloud.uploadFile({
          cloudPath: 'gzh52009_1.png', // 上传至云端的路径
          filePath: tempFilePaths[0], // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            wx.showToast({
              title: '上传成功',
            })
          }
        })
      }
    })
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

  }
})