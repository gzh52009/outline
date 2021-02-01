<template>
  <tr :class="{ 'table-success': item.complete }" @click="selectItem(item.id)">
    <td>
        <!-- <input type="checkbox" v-model="item.checked" /> -->
        <input type="checkbox" :checked="item.checked" @click.stop="selectItem(item.id)" />
    </td>
    <td>{{ idx + 1 }}</td>
    <td>{{ item.todo }}</td>
    <td>{{item.addtime | formatDate('YYYY/MM/DD hh:mm:ss')}}</td>
    <td>{{ item.complete ? "是" : "否" }}</td>
    <td>
      <button
        type="button"
        class="btn btn-sm btn-outline-success"
        @click.stop="completeItem(item.id)"
      >
        完成
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-danger"
        @click.stop="removeItem(item.id)"
      >
        删除
      </button>
    </td>
  </tr>
</template>
<script>
import Bus from './Bus';
import {formatDate} from '../../utils/filter';
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    idx: [Number, String],
  },
  methods: {
    completeItem(id) {
      Bus.$emit("complete", id);
    },
    removeItem(id) {
      Bus.$emit("remove", id);
    },
    selectItem(id) {
      Bus.$emit("select", id);
    },
  },
  filters:{
      formatDate
  }
};
</script>