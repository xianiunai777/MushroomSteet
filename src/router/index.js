import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const Cart = () => import('../views/shopcar/car')
const Profile = () => import('../views/profile/profile')
const Detile =()=>import('../views/detile/Detile')
Vue.use(Router)

const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detile/:id',
    component:Detile
  }
]
export default new Router({
  routes,
  mode:"history"
})
