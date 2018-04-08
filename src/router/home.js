const Home = () => import ('@/page/home/home')
const Nav = () => import ('@/page/home/nav/nav')
export default [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/Nav',
    name: 'Nav',
    component: Nav
  },
]