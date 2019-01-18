<template>
  <div class="wrapper Nav">
    <Header :title="'scroll'" />
    <div class="nav">
      <div class="list">
        <span v-for="item in navData" class="item" :class="[tag === item.id && 'active']"  @click="handleNav(item.id)">{{item.text}}</span>
        <!-- <span class="item" :class="[tag === 2 && 'active']"  @click="handleNav(2)">待付款</span>
        <span class="item" :class="[tag === 3 && 'active']"  @click="handleNav(3)">待使用</span>
        <span class="item" :class="[tag === 4 && 'active']"  @click="handleNav(4)">待评价</span>
        <span class="item" :class="[tag === 5 && 'active']"  @click="handleNav(5)">退款/售后</span>
        <span class="item" :class="[tag === 6 && 'active']"  @click="handleNav(6)">退款/售后</span>
        <span class="item" :class="[tag === 7 && 'active']"  @click="handleNav(7)">退款/售后</span>     -->
        <div class="line" :style="{left: (tag-1)*20 + '%'}"></div>
      </div>  
    </div>
  </div>
</template>
<script>
import Header from '@/commond/header.vue'
export default {
  data(){
    return {
      tag: 1,
      navData: [
        {
          id: 1,
          text: '全部 '
        },{
          id: 2,
          text: '待付款 '
        },{
          id: 3,
          text: '待使用 '
        },{
          id: 4,
          text: '待评价 '
        },{
          id: 5,
          text: '退款/售后'
        },{
          id: 6,
          text: '全部 '
        },{
          id: 7,
          text: '全部 '
        },
      ]
    }
   
  },
  components:{
    Header
  },
  methods: {
    handleNav(tag) {
      this.tag = tag
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin.sass'
.active
  color: $green-color

.nav 
  overflow: hidden
  margin-bottom: .4rem
  height: 50px
  padding-top: .2rem
  background: #fff
  .list  
    font-size: $desc-size 
    color: #111 
    background: #fff    
    overflow-y: hidden
    overflow-x: auto
    height: 62px
    position: relative
    display: flex
    width: 100%
    .item
      flex: 0 0 20%    
      line-height: 44px
      box-sizing: border-box
.line 
  display: block
  height: 2px
  width: 16%
  border-radius: 8px
  background-color: $green-color
  position: absolute
  bottom: 11px
  margin: 0 2%
  // z-index: 9999
  transition: left .3s ease-in
</style>
