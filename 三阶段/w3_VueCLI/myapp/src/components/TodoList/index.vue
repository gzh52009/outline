<template>
    <div class="container">
        <TodoForm v-on:add="addItem"></TodoForm>
        <TodoContent :list="list"></TodoContent>
        <TodoStatus :list="list"></TodoStatus>
    </div>
</template>
<script>
import TodoForm from './TodoForm.vue';
import TodoContent from './TodoContent.vue';
import TodoStatus from './TodoStatus.vue';

import Bus from './Bus';

// 引入css
import 'bootstrap/dist/css/bootstrap.css'

export default {
    name:'TodoList',
    data(){
        return {
            list: [{
                id: 1,
                todo: '定个小目标睡一整天',
                complete: true,
                checked:true,
                addtime: Date.now()
            }, {
                id: 2,
                todo: '赚他一个亿津巴布韦币',
                complete: false,
                checked:false,
                addtime: Date.now() + 3600
            }, {
                id: 3,
                todo: '迎娶白富美，达到人生巅峰',
                complete: false,
                checked:false,
                addtime: Date.now() + 360 * 1000
            }],
        }
    },
    methods:{
        addItem(todo){
            let newData = {
                id:parseInt(Math.random()*10000),
                todo,
                complete:false,
                checked:false,
                addtime:Date.now()
            }
            this.list.unshift(newData);

        },
        completeItem(id){
            this.list = this.list.map(item=>{
                if(item.id == id){
                    item.complete = true
                }
                return item;
            })
        },
        removeItem(id){
            this.list = this.list.filter(item=>item.id!=id)
        },
        selectItem(id){
            console.log('id=',id)
            this.list = this.list.map(item=>{
                if(item.id == id){
                    item.checked = !item.checked
                }
                return item;
            })
        },
    },
    components:{
        TodoForm,
        TodoContent,
        TodoStatus
    },
    // 生命周期函数
    mounted(){
        // <Bus v-on:complete="completeItem" @remove="removeItem" @select="selectItem" />
        Bus.$on('complete',this.completeItem)
        Bus.$on('remove',this.removeItem)
        Bus.$on('select',this.selectItem)
    }
}
</script>
<style>
    
</style>