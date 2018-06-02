const Home = () => import ('@/page/home/home')
const Nav = () => import ('@/page/home/nav/nav')
const Toast = () => import ('@/page/home/toast/toast')
const Scroll = () => import ('@/page/home/scroll/scroll')
const UpToRefresh = () => import ('@/page/home/scroll/upToRefresh')
const Swiper = () => import ('@/page/home/swiper/swiper')
const Menu = () => import ('@/page/home/menu/menu')
const Validator = () => import ('@/page/home/validator/validator')
const Video = () => import ('@/page/home/video/video')

export default [
  {
    path: '*',
    name: 'Home',
    component: Home
  },{
    path: '/Nav',
    name: 'Nav',
    component: Nav
  },{
    path: '/Toast',
    name: 'Toast',
    component: Toast
  },{
    path: '/Scroll',
    name: 'Scroll',
    component: Scroll
  },{
    path: '/UpToRefresh',
    name: 'UpToRefresh',
    component: UpToRefresh
  },{
    path: '/Swiper',
    name: 'Swiper',
    component: Swiper
  },{
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },{
    path: '/Validator',
    name: 'Validator',
    component: Validator
  },{
    path: '/Video',
    name: 'Video',
    component: Video
  }
]