const Home = () => import ('@/page/home/home')
const Nav = () => import ('@/page/home/nav/nav')
const Toast = () => import ('@/page/home/toast/toast')
const Scroll = () => import ('@/page/home/scroll/scroll')
const UpToRefresh = () => import ('@/page/home/scroll/upToRefresh')
const Swiper = () => import ('@/page/home/swiper/swiper')
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
  }
]