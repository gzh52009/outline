<template>
    <div v-if="goods._id">
        <img :src="baseURL + '/img/' + goods.imgurl" />
        <h1>{{goods.name}}</h1>
        <p class="price">
          <del>{{ goods.price.toFixed(2) }}</del>
          <span>{{ goods.sale_price.toFixed(2) }}</span>
        </p>
        <p>SKU:<small>{{goods.sku}}</small></p>
        <el-button type="warning" icon="el-icon-shopping-cart-2">加入购物车</el-button>
        <el-button type="danger" icon="el-icon-goods">立即购买</el-button>
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
            baseURL
        }
    },
    async mounted(){
        console.log('$route',this.$route)
        // 获取商品id
        let {id} = this.$route.params;
        
        const {data} = await this.$request.get('/goods/'+id);

        this.goods = data.data;
    }
}
</script>