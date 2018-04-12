<template>
  <div class="wrapper toast">
    <Header :title="'toast'" />
    <p class="title">toast效果展示</p>
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
import Btn from '@/components/button.vue'
import Header from '@/commond/header.vue'
export default {
  components:{
    Btn,
    Header
  },
  methods: {
    useWho(tag,top) {
      top ? this.$toast(tag,2500,tag,top) : this.$toast(tag,2500,tag)    
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


