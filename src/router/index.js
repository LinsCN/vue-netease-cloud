import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const LoginVeiw =()=>import("../views/LoginView.vue")
const ProFileView =()=>import("../views/ProfileView.vue")
const YunCunView =()=>import("../views/YunCunView.vue")
const VideoVeiw =()=>import("../views/VideoView")
const SearchVeiw =()=>import("../views/SearchView")

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVeiw
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProFileView
  },
  {
    path: '/yun-cun',
    name: 'yun-cun',
    component: YunCunView
  },
  {
    path: '/video',
    name: 'video',
    component: VideoVeiw
  },
  {
    path: '/search',
    name: 'search',
    component:SearchVeiw
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
