// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/init.css'
import '@/assets/js/rem.js'

// plugins
import loading from '@/plugins/loading/loading.js'
import toast from '@/plugins/toast/toast.js'

import { Button } from 'vant';

Vue.use(Button);
// 注册全局
Vue.use(loading)
Vue.use(toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
