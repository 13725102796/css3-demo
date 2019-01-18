<template>
  <div class="wrapper Store">
    <Header :title="'scroll'" />
    <div class="card-box">
      <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" >
        <div class="scroll-box">
          <p>下拉刷新</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
          <p>数据填充</p>
        </div> 
      </Scroll>
    </div>
  </div>
</template>
<script>
import Scroll from '@/plugins/scroll/scroll.vue'
import Header from '@/commond/header.vue'
export default {
  name: 'Store',
  components: {
    Header,
    Scroll
  },
  data(){
    return {
      // text: '',
      // noMore: false,
      // i: 0
    }
  },
  methods: {
    onRefresh(done) {
      setTimeout(()=>{
        done()
        this.$toast({msg: '添加成功'})
      },2000)
    },
    onInfinite(done) {
      console.log(1)
      setTimeout(()=> {
        done(0)
      })
      
    },
  },
  mounted(){

  },
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin'
.card-box 
  height: calc(100vh - 1.2rem)
  position: relative
  .scroll-box
    p
      padding: .5rem 0
</style>