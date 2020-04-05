import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const Prolife = () => import('../components/Prolife')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/about/:info',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'news',
        component:HomeNews,
      },
      {
        path:'message',
        component:HomeMessage,
      }
    ]
  },
  {
    path:'/prolife',
    component: Prolife,
    meta:{
      title:'档案'
    }
  }
]
const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title
  next()
})

export default router
