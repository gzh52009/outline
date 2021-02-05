<template>
  <div ref="box" id="box">{{ qty }}</div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Lifecycle",
//   props:[],
  data() {
    return {
      qty: 10,
    };
  },
  computed:{
      total(){
          return this.qty*this.qty;
      }
  },
  // 生命周期函数
  beforeCreate() {
    console.log("beforeCreate",this.qty,this.total);
  },
  created() {
    console.log("created",this.qty,this.total);

    // 发起ajax请求
    // this.source = axios.CancelToken.source()
    // axios.get('xxx',{
    //     cancelToken: this.source.token
    // })
  },
  beforeMount() {
    console.log("beforeMount",document.querySelector('#box'));
  },
  mounted() {
    console.log("mounted",document.querySelector('#box').innerHTML);
    this.timer = setInterval(()=>{
        console.log('interval')
        this.qty++
    },1000)
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },

  destroyed() {
    console.log("destroyed");
    // 清除定时器
    clearInterval(this.timer);
    // 取消ajax请求
    // this.source.cancel('取消xxx请求')
  },
};
</script>