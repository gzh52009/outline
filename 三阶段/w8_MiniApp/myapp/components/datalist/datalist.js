// components/datalist/datalist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'Datalist'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hello(){
      console.log('hi '+ this.data.name)
    }
  }
})
