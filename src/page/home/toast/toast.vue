<template>
  <div class="wrapper toast">
    <Header :title="'toast'" />
    <p class="title">点击效果展示</p>
    <ul>
      <li @click="useWho('translateX')" >
        <btn :text="'translateX'" />
      </li>
      <li @click="useWho('translateY')" >
        <btn :text="'translateY'" />
      </li>
      <li @click="useWho('translateZ')" >
        <btn :text="'translateZ'" />
      </li>
      <li @click="useWho('rotateX')" >
        <btn :text="'rotateX'" />
      </li>
      <li @click="useWho('rotateY')" >
        <btn :text="'rotateY'" />
      </li>
      <li @click="useWho('fixedTopX','top')" >
        <btn :text="'fixedTopX'" />
      </li>
    </ul>
  </div>
</template>
<script>
/**
* params(String) msg 提示文本
* params(Number) ms  延时毫秒 默认2s
* params(String) method 动画方法 默认 entry
  this.$toast(msg, ms. method)

  插件封装在src/plugins下
  在main.js里注册全局后，
  
 */
import Btn from '@/components/button.vue'
import Header from '@/commond/header.vue'
export default {
  components:{
    Btn,
    Header
  },
  methods: {
    useWho(tag,top) {
      top ? this.$toast({msg:tag,ms:2500,method:tag,top:top}) : this.$toast({msg:tag,ms:2500,method:tag})    
    }
  }
}
</script>
<style lang="sass" scoped>
.toast
  .title
    padding: .5rem 0
  ul
    li
      padding: .2rem 0

</style>


