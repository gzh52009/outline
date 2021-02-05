[TOC]

# Vuex

## 了解Vuex

Vuex是一个专门为Vue.js应用程序开发的全局状态管理模式, 它采用集中式存储管理所有组件的公共状态, 并以相应的规则保证状态以一种可预测的方式发生变化

### 为什么要使用Vuex

vue组件是Vue最强大的功能之一，所以要掌握Vue，组件间的通信是必须掌握的技能，但如果你使用 vue.js 开发过大型项目, 那么我想你可能会对 vue 组件之间的通信感到崩溃 。
>vuex的出现就是为了解决多组件间的数据通讯（下图为：Vuex的核心工作原理）

![vuex](./img/vuex.png "Optional title")


## 使用

### 步骤

1. 实例化一个store
    * 定义state
2. 将创建好的store注入到Vue根实例里
3. 在组件中使用store中的数据
    > 在任意组件中都可利用this.$store.state.xxx获取状态数据

```javascript
    // 1.创建store
    const store = new Vuex.Store({
        // 创建state
        state:{
            products:[
                {name: '鼠标', price: 20},
                {name: '键盘', price: 40},
                {name: '耳机', price: 60},
                {name: '显示屏', price: 80}
            ]
        }
    }

    let app = new Vue({
        el:'#app',
        template:`<myapp/>`,
        components:{ myapp },

        // 2. 注入store到vue实例
        store
    });

    // 3. 在myapp组件中使用store
    this.$store.state.products
```

### Vuex的核心概念

* state（理解为组件中的data）
    > state就是Vuex中的公共的状态, 用于保存所有组件的公共数据
    * 组件中通过this.$store.state.xxx获取


```javascript
    state:{
        products:[
            {id:1, name: '鼠标', price: 20},
            {id:2, name: '键盘', price: 40},
            {id:3, name: '耳机', price: 60},
            {id:4, name: '显示屏', price: 80}
        ],
        city:'广州'
    },
```

* getters
    > 类似于组件中的computed，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    * 组件中通过this.$store.getters.xxx获取


```javascript
    getters:{
        saleProducts(state){
            return state.products.map(item=>{
                return {
                    price:item.price/2,
                    name:item.name
                }
            });
        }
    },
```

* mutations
    > 类似于组件中的methods，负责更改state中的数据
    - mutation参数
        + state
        + payload 触发函数时传入的参数
    * 调用方式：this.$store.commit(type,payload)

    ```javascript
        mutations:{
            // 定义
            change(state,payload){
                state.products = state.products.map(item=>{
                    return {...item,...payload};
                });
            }
        }

        // 调用
        this.$store.commit('change',{price:88})
    ```

* actions 
    > 类似于 mutations，负责异步操作（actions中可以包含异步操作, mutations中绝对不允许出现异步）
    * actions用来操作mutations，mutations用来操作state
    * 调用方式：this.$store.dispatch(type,payload)

    * action参数
        - context： 与store实例具有相同属性和方法的对象
        - payload 触发函数时传入的参数

    ```javascript
        actions:{ 
            // 定义
            minusPriceAsync( context, payload ) {
                setTimeout( () => {
                    context.commit( 'change', payload ); //context提交
                }, 2000)
            }
        }

        // 调用
        this.$store.dispatch('minusPriceAsync',{price:100})
    ```

### store模块化

由于使用单一状态state（即所有状态会集中到state这个对象），当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter等，这样好管理又容易维护

* 模块内部的 mutation 和 getter，接收的第一个参数state是模块的局部状态对象
* mutation中
    * context.state 局部状态
    * context.rootState 全局状态

```javascript
    import Vue from 'vue';
    import Vux from 'vuex';

    // 引入其他store模块
    import home from './home.js';
    import top250 from './top250.js';

    export default new Vuex.Store({
        modules:{
            home,
            top250
        }
    });

    // home.js
    const home = {
        state:{
            numbers:[10,6,3,9,12,18,5]
        },
        getters:{
            small(state){
                return state.numbers.filter(item=>item<10)
            }
        },
        mutations:{

        }
    }
    export default home
```


### 映射Vuex
> 使用mapState,mapGetters,mapMutations,mapActions把state,getters,mutations,actions映射到组件中使用，主要用于简化操作

```javascript
    // 模块化开发中直接引入mapState使用
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

    computed:{
        // 数组形式
        ...mapState([
            'products' //映射computed.products为this.$store.state.products
        ]),
        // 对象形式
        ...mapState({
            // products:'products',
            // products:state=>state.products,
            products(state){
                return state.products;
            }
        })
    },
    methods:{
        // 数组形式
        ...mapMutations([
            'change',//映射this.change为this.$store.commit('change')
            ]),
        // 对象形式
        ...mapMutations({
            change2:'change',//映射this.change2为this.$store.commit('change')

            // 函数形式：
            change3:(commit,payload)=>{
                commit('change',payload);
            }
        }),
        ...mapActions({
            modify:'minusPriceAsync', //映射this.modify()为this.$store.dispatch('minusPriceAsync'),

            // 函数形式：自动传入dispatch，payload为调用,minus是传入的参数
            minus(dispatch,payload){
                dispatch('minusPriceAsync',payload)
            }
        })
    }
```