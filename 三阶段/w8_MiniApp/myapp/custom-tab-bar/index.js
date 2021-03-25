Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    menu:[{
      "pagePath":"/pages/index/index",
      "text":"首页",
      "iconPath":"/img/home.png",
      "selectedIconPath":"/img/home_active.png",
      "badge":"new"
    },{
      "pagePath":"/pages/mine/mine",
      "text":"我的",
      "iconPath":"/img/mine.png",
      "selectedIconPath":"/img/mine_active.png",
      dot:true
    }],
    current:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changemenu(e){
      const {index,item} = e.detail;
      console.log(index,item);
      wx.switchTab({
        url: item.pagePath,
      })

      this.setData({
        current:index
      })
    },
    setCurrent(current){
      this.setData({
        current
      })
    }
  },
  pageLifetimes:{
    ready(){
      // 页面渲染完成后执行
      console.log('page ready')
    }
  }
})
