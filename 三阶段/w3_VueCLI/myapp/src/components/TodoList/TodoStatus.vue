<template>
  <div>
    待办事项：{{ list.length }}，完成：{{ completeList.length }}，未完成：{{
      unCompleteList.length
    }}
  </div>
</template>
<script>
export default {
  name: "TodoStatus",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    completeList() {
      return this.list.filter((item) => item.complete);
    },
    unCompleteList() {
      return this.list.filter((item) => !item.complete);
    },
  },
};
</script>