<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="购物车"></el-step>
      <el-step title="结算"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <el-table :data="goodslist" tooltip-effect="dark" style="width: 100%" @select="selectGoods"
    @select-all="selectGoods"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column label="商品图片" width="100">
        <template v-slot:default="{ row }">
          <img class="goodsimg" :src="row.imgurl" @click="goto('/goods/'+row._id)" />
        </template>
      </el-table-column>
      <el-table-column label="商品信息">
          <!-- <template #header>
              <div style="color:#f00;">商品信息xxxx</div>
          </template> -->
        <template v-slot:default="{ row}">
          <h4 @click="goto('/goods/'+row._id)">{{ row.name }}</h4>
          <p class="price">
            <span>{{ row.price }}</span> &times;
            <el-input-number
              size="mini"
              v-model="row.qty"
              style="width: 100px"
              @change="changeQty(row._id,$event)"
            ></el-input-number>
          </p>
        </template>
      </el-table-column>

      <!-- <el-table-column prop="qty" label="数量" show-overflow-tooltip></el-table-column> -->
      <el-table-column label="操作" width="100">
        <template v-slot:default="{ row }">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="remove(row)"
            plain
            size="mini"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-button type="danger" plain size="small" @click="clear">清空购物车</el-button>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button type="danger" @click="pay">去结算</el-button>
        <p class="price">
          总计：<span>{{ totalPrice.toFixed(2) }}</span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      active: 1,
      selection:[]
      // goodslist: [
      //   {
      //     _id: 1,
      //     name: "huawei mate40 pro",
      //     price: 6998,
      //     qty: 10,
      //     imgurl: "http://localhost:2009/img/display_251499_1.jpg",
      //   },
      //   {
      //     _id: 2,
      //     name: "xiaomi 11",
      //     price: 3998,
      //     qty: 5,
      //     imgurl: "http://localhost:2009/img/display_450214_1.jpg",
      //   },
      // ],
    };
  },
  computed: {
    totalPrice() {
      // return this.$store.getters.totalPrice
      return this.selection.reduce((prev,item)=>prev+item.price*item.qty,0)
    },
    goodslist(){
      return this.$store.state.goodslist
    }
  },
  methods: {
    remove({_id}) {
      this.$store.commit('remove',{_id})
    },
    clear(){
      this.$store.commit('clear')
    },
    changeQty(_id, qty){
      console.log(_id, qty)
      // this.$store.commit('changeQty',{_id,qty})

      this.$store.dispatch('changeQtyAsync',{_id,qty})
    },
    goto(path){
      this.$router.push(path);
    },
    selectGoods(selection,row){
      console.log(selection,row)
      this.selection = selection
    },
    pay(){
      if(this.selection.length===0){
        this.$message({
          type:'warning',
          message:'请选择购买商品'
        });
        return;
      }
      this.$router.push('/order')
    }
  },
};
</script>
<style lang="scss" scoped>
.goodsimg {
  width: 60px;
}
</style>