const Home = () => import ('@/page/home/home')
const Nav = () => import ('@/page/home/nav/nav')
const Toast = () => import ('@/page/home/toast/toast')
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
  }
]