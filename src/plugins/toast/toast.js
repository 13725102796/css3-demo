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
    Vue.prototype.$toast = (obj={}) => {
      if(!toast) {
        const com = Vue.extend(Toast)
        toast = new com
        if(!toast.$el) {
          toast.$mount()
          document.querySelector('body').appendChild(toast.$el)
        }
      }
      const msg = obj.msg , 
            mask = obj.mask === false ? false : true,
            ms = obj.ms || 2000,
            method = obj.method || 'entry',
            top = obj.top || null

      toast.show = true  
      toast.delayed(msg,mask,ms,method,top)
            
    }
  }
}