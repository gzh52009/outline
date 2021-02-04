<template>
    <div>Goods</div>
</template>
<script>
export default {
    name:'Goods',
    props:['id'],
    data(){
        return {
            info:{}
        }
    },
    mounted(){
        console.log('$route',this.$route)
        // 获取商品id
        let {id} = this.$route.params;
        console.log(this.$route)
    }
}
</script>