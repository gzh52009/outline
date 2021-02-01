<template>
  <table class="table" ref="table">
    <thead>
      <tr>
        <th><input type="checkbox" v-model="checkAll" />全选</th>
        <th>#</th>
        <th>代办事项</th>
        <th>添加时间</th>
        <th>是否完成</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr
        is="todo-item"
        v-for="(item, idx) in list"
        :key="item.id"
        :item="item"
        :idx="idx"
      ></tr> -->
      <TodoItem
        v-for="(item, idx) in list"
        :key="item.id"
        :item="item"
        :idx="idx"
      />
    </tbody>
  </table>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  name:'TodoContent',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    checkAll: {
      get() {
        return this.list.every((item) => item.checked);
      },
      set(newVal) {
        this.list.forEach((item) => {
          item.checked = newVal;
        });
      },
    },
  },
  components: {
    TodoItem,
  },
};
</script>