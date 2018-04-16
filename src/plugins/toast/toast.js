import Toast from './toast.vue'
/**
 * params(String) msg 提示文本
 * params(Number) ms  延时毫秒 默认2s
 * params(String) method 动画方法 默认 entry
 * 使用方法 use 
 *  vm.$toast(msg,ms,method) 
 */
export default {
  install(Vue,options={}) {
    let toast = null
    Vue.prototype.$toast = (msg,ms = 2000,method = 'entry',top) => {
      if(!toast) {
        const com = Vue.extend(Toast)
        toast = new com
        if(!toast.$el) {
          toast.$mount()
          document.querySelector('body').appendChild(toast.$el)
        }
      }  
      toast.show = true  
      toast.delayed(msg,ms,method,top)
            
    }
  }
}