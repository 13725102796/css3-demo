import Vue from 'vue'
import Router from 'vue-router'


// 路由导入
import Home from './home'
import Plugins from './plugin'
Vue.use(Router)
//路由集合
const routes = [].concat(Home, Plugins)
export default new Router({
  mode: 'history',
  routes: routes
})
