import Vue from 'vue';
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Reg from '../views/Reg.vue'
import Login from '../views/Login.vue'
import Mine from '../views/Mine.vue'
import Discover from '../views/Discover.vue'
import Goods from '../views/Goods.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    // mode:'hash',
    routes: [
        {
            path: '/home',
            component: Home,
            // 命名路由
            name:'home'
        },
        // 重定向
        {
            path: '/',
            // redirect:'/home'
            redirect:{
                name:'home'
            }
        },
        {
            path: '/reg',
            component: Reg
        },
        {
            path: '/login',
            component: Login
        },
       
        {
            path: '/discover',
            component: Discover

            // components用于多个<router-view/>是的命名视图
            // components:{
            //     header:DiscoverHeader,
            //     main:Discover,
            //     default:xxx
            // }
        },

        // 动态路由：id可变
        {
            path: '/goods/:id',
            component: Goods,
            // 一般用于固定参数传递
            meta:{c:10,d:20},
            // props:true, // 等效于<Goods v-bind="$route.params"/>
            // props:{age:18,username:'laoxie'}, // 等效于<Goods :age="18",username="laoxie"/>
            props:function(route){
                // route等效于$route
                return route.query
            }, // 等效于<Goods :age="18",username="laoxie"/>
            
            name:'goods'
        },
        {
            path: '/mine',
            component: Mine
        },

        // 404页面
        {
            path:'/notfound',
            component:NotFound
        },
        {
            path:'*',
            redirect:'/notfound'
        }
    ]
})

export default router