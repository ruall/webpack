import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about/:info',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'',
          redirect:'news',
        },
        {
          path:'news',
          component:HomeNews,
        },
        {
          path:'message',
          component:HomeMessage,
        }
      ]
    }
  ]
})
