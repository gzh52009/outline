<template>
  <div class="goodslist">
    <el-row :gutter="20" type="flex" style="flex-wrap: wrap">
      <el-col
        v-for="item in goodslist"
        :key="item._id"
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        :xl="3"
      >
        <img
          :src="baseURL + '/img/' + item.imgurl"
          @click="gotoDetail(item._id)"
        />
        <h4 @click="gotoDetail(item._id)">{{ item.name }}</h4>
        <p class="price">
          <del>{{ item.price.toFixed(2) }}</del>
          <span>{{ item.sale_price.toFixed(2) }}</span>
        </p>
      </el-col>
    </el-row>
    <el-pagination background layout="total,prev, pager, next,sizes" :total="total" @current-change="pageChange" @size-change="sizeChange">
    </el-pagination>
  </div>
</template>
<script>
import { baseURL } from "../utils/request";
export default {
  name: "Discover",
  data() {
    return {
      goodslist: [],
      baseURL,
      total:0,
      page:1,
      size:10,
    };
  },
//   watch:{
//       page(newVal){
//           this.getData()
//       }
//   },
  methods: {
    gotoDetail(id) {
      // /goods/:id
      // this.$router.push('/goods/'+id)
      this.$router.push({
        // path:'/goods',
        name: "goods",
        params: { id, username: "laoxie" },
        query: { a: 10, b: 20 },
      });
    },
    async getData(){
        const {page,size} = this;
        const { data:{data} } = await this.$request.get("/goods/list",{
            page,
            size
        });
        console.log("data=", data);
        this.goodslist = data.result;
        this.total = data.total
    },
    pageChange(page){
        this.page = page;
        this.getData();
    },
    sizeChange(size){
        this.size = size;
        this.getData();
    }
  },
  async mounted() {console.log('Discover.mounted')
    this.getData();
  },
  updated(){

  },
  beforeRouteEnter(to,from,next){
    console.log('Discover.beforeRouteEnter',this)
    next()
  },
  beforeRouteUpdate(to,from,next){
    console.log('Discover.beforeRouteUpdate',this)
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log('Discover.beforeRouteLeave',this)
    next()
  }
};
</script>
<style lang="scss" scoped>
.goodslist {
  img {
    width: 100%;
  }
}
</style>