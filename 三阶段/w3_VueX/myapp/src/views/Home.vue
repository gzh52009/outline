<template>
    <div>
        
        Home
        
    <p>PageName: {{pageName}}</p>
    <p v-once>v-once: {{pageName}}</p>
    <p v-pre>v-pre: {{pageName}}</p>
    <button @click="pageName+='+'">修改</button>
    <input v-model="username" />
    </div>
</template>
<script>
export default {
    name:'Home',
    data(){
        return {
            username:'',
            pageName:'Home'
        }
    },
    mounted(){
        console.log('Home.mounted')
    },
    activated(){
        console.log('Home.activated')
    },
    deactivated(){
        console.log('Home.deactivated')
    },
    beforeDestroy(){
        console.log('Home.beforeDestroy')
    }
}
</script>