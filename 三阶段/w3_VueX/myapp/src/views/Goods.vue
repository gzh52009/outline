<template>
<div>
    <div v-if="goods._id">
        <img :src="baseURL + '/img/' + goods.imgurl" />
        <h1>{{goods.name}}</h1>
        <p class="price">
          <del>{{ goods.price.toFixed(2) }}</del>
          <span>{{ goods.sale_price.toFixed(2) }}</span>
        </p>
        <p>SKU:<small>{{goods.sku}}</small></p>
        <el-button type="warning" icon="el-icon-shopping-cart-2" @click="add2cart">加入购物车</el-button>
        <el-button type="danger" icon="el-icon-goods" @click="buyNow">立即购买</el-button>
    </div>
    <h4>推荐商品</h4>
    <el-row :gutter="20" type="flex" style="flex-wrap: wrap" class="recommend-list">
      <el-col
        v-for="item in recommendList"
        :key="item._id"
        :xs="8"
        :sm="6"
        :md="4"
        :lg="4"
        :xl="4"
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
</div>
</template>
<script>
import {baseURL} from '../utils/request'
export default {
    name:'Goods',
    props:['id'],
    data(){
        return {
            goods:{},
            recommendList:[],
            baseURL
        }
    },
    methods:{
        add2cart(){
            const {_id,name,price,imgurl,sale_price} = this.goods;
            // 判断当前商品是否已经存在购物车中
            // 存在：数量+1
            // 否则：添加商品
            const current = this.$store.state.goodslist.find(item=>item._id==_id)
            if(current){
                this.$store.commit('changeQty',{_id,qty:current.qty+1})
            }else{
                const goods = {
                    _id,
                    name,
                    price:sale_price,
                    imgurl:baseURL+'/img/'+imgurl,
                    qty:1
                }
                this.$store.commit('add',goods);

            }
        },
        buyNow(){
            this.add2cart();
            this.$router.push('/cart');
        },
         gotoDetail(id) {
            this.$router.push({
                name: "goods",
                params: { id },
            });
        },
        async getData(id){
            // 获取商品id
            id = id || this.$route.params.id;
            
            const {data} = await this.$request.get('/goods/'+id);

            this.goods = data.data;

            
        }
    },
    // watch:{
    //     '$route.params.id'(newVal,oldVal){
    //         console.log(newVal)
    //         this.getData()
    //     }
    // },
    async created(){
        console.log('mounted')
        this.getData();

        // 获取推荐商品
        const { data:{data:{result}} } = await this.$request.get("/goods/list",{
            page:3,
            size:6
        });
        this.recommendList = result;
    },
    beforeRouteUpdate(to,from,next){
        console.log('to=',to)
        console.log('from=',from)
        this.getData(to.params.id);
        next();
    }
}
</script>
<style lang="scss" scoped>
.recommend-list {
  img {
    width: 100%;
  }
}
</style>