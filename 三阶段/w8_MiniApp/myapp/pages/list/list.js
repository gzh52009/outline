import request from '../../utils/request';console.log('request=',request);

const app = getApp();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    classlist:[],
    page:1,
    size:12,
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求班级列表
    // wx.request({
    //   url: 'http://120.76.247.5:2020/api/class',
    //   success(res){
    //     console.log(res.data)
    //   }
    // })
    this.getData();
    
  },
  async getData(){
    let {size,page,classlist} = this.data;
    // {code,msg,data:{total:30,result:[10]}}
    // const data = await app.request('/class',{
    //   size,
    //   page
    // });
    // classlist.push(...data.data.result);

    const {data} = await request.get('/class',{
      size,
      page
    })

    classlist.push(...data.result);
    this.setData({
      classlist,
      hasMore:classlist.length < data.total
    })

    console.log('data=',data);
  },

  gotoDetail(e){
    const {classid} = e.currentTarget.dataset;
    wx.navigateTo({
      url:'/pages/class/class?classid='+classid
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
    console.log('onPullDownRefresh')
    this.setData({
      page:1,
      size:12,
      classlist:[],
      hasMore:true
    },async ()=>{
      await this.getData();
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
    const {page,hasMore} = this.data;
    if(hasMore){
      this.setData({
        page:page+1
      },()=>{
        this.getData();
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})