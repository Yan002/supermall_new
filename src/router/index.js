import Vue from 'vue'
import VueRouter from "vue-router"

const Home = () =>import('views/home/home.vue')
const Category = () =>import('views/category/category.vue')
const Cart = () =>import('views/cart/cart.vue')
const Profile = () =>import('views/profile/profile.vue')
const Detail = () =>import('views/detail/Detail.vue')


Vue.use(VueRouter)


const routes=[
    {
        path:'',
        redirect: '/home',
        component: Home
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category
    },
    {
        path:'/cart',
        component: Cart
    },
    {
        path:'/profile',
        component: Profile
    },
    {
        path:'/detail/:iid',
        component: Detail
        
    }

]

const router = new VueRouter({
    routes,
    mode:'history'
    
})

export default router