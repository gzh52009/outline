<template>
  <button type="button" class="btn btn-sm">
    <div class="default">
      <slot username="laoxie" psw="123456" />
    </div>
    <div class="header">
      <slot name="header" a="10" b="20"/>
    </div>
  </button>
</template>
<script>
export default {
  props: ["text"],
};
</script>