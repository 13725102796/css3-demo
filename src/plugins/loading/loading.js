import Loading from './loading.vue'

export default {
  install(Vue,options = {}) {
    let loading = null 
    Vue.prototype.$loading = (bool = true) => {
      if(!loading) {
        const com = Vue.extend(Loading)
        loading = new com 
        // 如果组件没有挂载，将起其挂载
        if(!loading.$el) {
          loading.$mount()
          document.querySelector(options.container || '#loading').appendChild(loading.$el)
        }
      }
      if(bool) {
        loading.open()
      } else {
        loading.close()
      }
    }
  }
}