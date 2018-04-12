<template>
  <div class="wrapper Nav">
    <Header :title="'nav'" />
    <div class="nav">
      <ul>
        <li @click="select(1)" :class="[tag === 1 && 'active']">
          <span class="icon-box rotate">
            <i class="fa-camera-retro"></i>
          </span>
          <span>nav1</span>
        </li>
        <li @click="select(2)" :class="[tag === 2 && 'active']">
          <span class="icon-box translate">
            <i class="fa-connectdevelop"></i>
          </span>
          <span>nav1</span>
        </li>
        <li @click="select(3)" :class="[tag === 3 && 'active']">
          <span class="icon-box rotate-y">
            <i class="fa-firefox"></i>
          </span>
          <span>nav1</span>
        </li>
        <li @click="select(4)" :class="[tag === 4 && 'active']">
          <span class="icon-box translate-y">
            <i class="fa-github"></i>
          </span>
          <span>nav1</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from '@/commond/header.vue'
export default {
  data(){
    return {
      tag: 1
    }
   
  },
  components:{
    Header
  },
  methods: {
    select(tag) {
      this.tag = tag
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/assets/css/mixin.sass'
.active 
  color: #fff
  .icon-box
    opacity: 1!important
    transform: translate3d(-50%,0,0) rotate3d(1,1,1,0deg) scale3d(1,1,1)!important
    i
      transform: scale3d(1,1,1) !important

.nav
  height: 4rem
  padding: 2rem 0
  ul
    display: flex
    background: #06c1ae73
    padding: .2rem 0 
    color: #444
    li
      height: .8rem
      line-height: .8rem
      flex: 1
      position: relative
      box-size: border-box
      transition: color .6s ease
      &:nth-child(n+2)
        border-left: 1px solid #333   
      .rotate 
        transform: translate3d(-50%,.1rem,0) rotate3d(1,1,1,45deg)
        transform-origin: center bottom
        i
          transform: scale3d(0,0,1)
      .translate
        transform: translate3d(-50%,.3rem,0)
        i
          transform: translate3d(0,.25rem,0)
      .rotate-y
        transform: translate3d(-50%,.15rem,0) rotate3d(0,1,0,90deg)
        transform: center bottom
        i
          transform: scale3d(0,0,1)
      .translate-y
        transform: translate3d(-50%,-.3rem,0)
        i
          transform: translate3d(0,-.25rem,0)
      .icon-box
        +position('')
        display: block
        bottom: 150%
        height: 1.3rem
        width: 1.4rem
        line-height: 1.3rem
        border-radius: 1.4rem
        background: #fff
        color: #666   
        opacity: 0
        transition: all .4s ease
        i
          display: block
          transition: all .4s ease
          
      

                    

.fa-camera-retro:before 
  content: "\f083"
  +fa

.fa-connectdevelop:before 
  content: "\f20e"
  +fa

.fa-firefox:before 
  content: "\f269"
  +fa

.fa-github:before 
  content: "\f09b"
  +fa


</style>
