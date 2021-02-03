<template>
    <div>
        <el-row :gutter="20">
            <el-col 
            v-for="item in goodslist" 
            :key="item._id"
            :xs="12"
            :sm="8"
            :md="6"
            :lg="4"
            :xl="3"
            >
                <img :src="baseURL + '/img/' + item.imgurl" @click="gotoDetail(item._id)" />
                <h4 @click="gotoDetail(item._id)">{{item.name}}</h4>
                <p class="price">
                    <del>{{item.price.toFixed(2)}}</del>
                    <span>{{item.sale_price.toFixed(2)}}</span>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {baseURL} from '../utils/request'
export default {
    name:'Discover',
    data(){
        return {
            goodslist:[],
            baseURL
        }
    },
    methods:{
        gotoDetail(id){
            this.$router.push('/goods/'+id)
        }
    },
    async mounted(){
        const {data} = await this.$request.get('/goods/list');
        console.log('data=',data);
        this.goodslist = data.data.result;
    }
}
</script>