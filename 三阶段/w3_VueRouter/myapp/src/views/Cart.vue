<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="购物车"></el-step>
      <el-step title="结算"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <el-table :data="goodslist" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column label="商品图片" width="100">
        <template v-slot:default="{ row }">
          <img class="goodsimg" :src="row.imgurl" />
        </template>
      </el-table-column>
      <el-table-column label="商品信息">
        <template v-slot:default="{ row, column, $index }">
          <h4>{{ row.name }}</h4>
          <p class="price">
            <span>{{ row.price }}</span> &times;
            <el-input-number
              size="mini"
              v-model="row.qty"
              style="width: 100px"
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
        <el-button type="danger" plain size="small">清空购物车</el-button>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button type="danger">去结算</el-button>
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
      goodslist: [
        {
          _id: 1,
          name: "huawei mate40 pro",
          price: 6998,
          qty: 10,
          imgurl: "http://localhost:2009/img/display_251499_1.jpg",
        },
        {
          _id: 2,
          name: "xiaomi 11",
          price: 3998,
          qty: 5,
          imgurl: "http://localhost:2009/img/display_450214_1.jpg",
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.goodslist.reduce(
        (prev, item) => prev + item.price * item.qty,
        0
      );
    },
  },
  methods: {
    remove(row) {
      this.goodslist = this.goodslist.filter((item) => item._id != row._id);
    },
  },
};
</script>
<style lang="scss" scoped>
.goodsimg {
  width: 60px;
}
</style>