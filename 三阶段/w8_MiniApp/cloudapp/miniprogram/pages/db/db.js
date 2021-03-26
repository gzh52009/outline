// pages/db/db.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collection:null,
    db:null,
    cityList:[]
  },

  insert(){
    const {collection} = this.data;

    collection.add({
      data:{
        name:'东莞',
        order:0,
        addtime:new Date()
      }
    }).then(res=>{
      wx.showToast({
        title: '添加成功',
      })
      console.log('res',res);
    })

  },
  async remove(){
    const {collection} = this.data;

    await collection.where({name:'深圳'}).remove();
    wx.showToast({
      title: '删除数据成功',
    })

  },
  async update(){
    const {collection,db} = this.data;

    await collection.where({}).update({
      data: {
        view:db.command.inc(1) 
      },
    })
    wx.showToast({
      title: '修改数据成功',
    })

  },
  async find(){
    const {collection,db} = this.data;

    // const {data} = await collection.get()
    const {data} = await collection.doc('28ee4e3e605d80500caace80297d0916').get()
    console.log('data=',data);
    // this.setData({
    //   classList:data
    // })

  },

  async callFn(){
    const {result} = await wx.cloud.callFunction({
      name:'h52009',
      data:{
        a:10,
        b:20
      }
    })

    console.log('result=',result);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const db = wx.cloud.database();

    const col = db.collection('city')

    this.setData({
      collection:col,
      db
    })

    const data = await col.get();

    console.log('classdata=',data);
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