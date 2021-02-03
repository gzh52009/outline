<template>
    <div>Goods</div>
</template>
<script>
export default {
    name:'Goods',
    data(){
        return {
            info:{}
        }
    },
    mounted(){
        // 获取商品id
        let {id} = this.$route.params;
        console.log(this.$route)
    }
}
</script>