<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      v-model.trim="todo"
      placeholder="输入代办事项"
      ref="input"
      @keyup.13="addItem"
    />
    <div class="input-group-append">
      <button class="btn btn-success" @click="addItem">添加</button>
    </div>
  </div>
</template>
<script>
export default {
  name:'TodoForm',
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addItem() {
      // 手动触发事件
      this.$emit("add", this.todo);

      // 清空并自动获得焦点
      this.todo = "";
      this.$refs.input.focus();
    },
  },
};
</script>