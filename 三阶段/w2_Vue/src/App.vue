<template>
    <div>
        App
        <!-- 图片使用绝对路径，webpack不会处理 -->
        <img src="/img/g1.jpg" />

        <!-- 相对路径webpack会自动处理 -->
        <img src="./assets/g3.jpg" />
        <img src="./assets/home_active.png" />

        <!-- 路径为变量  -->
        <img :src="require('./'+imgurl)" />
        <ul>
            <li v-for="item in goodslist" :key="item.name">
                <h4>{{item.name}}</h4>
                <img :src="require('./assets/'+item.imgurl)" />
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'App',
    data(){
        return {
            imgurl:'assets/g4.jpg',
            goodslist:[{
                name:'goods1',
                imgurl:'g3.jpg'
            },{
                name:'goods2',
                imgurl:'g4.jpg'
            },{
                name:'goods3',
                imgurl:'g5.jpg'
            }]
        }
    }
}
</script>
<style scoped lang="scss">
    div{color:#f60}
</style>