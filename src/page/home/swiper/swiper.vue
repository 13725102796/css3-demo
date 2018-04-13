<template>
  <div class="wrapper">
    <Header :title="'swiper'" />
    <div class="swiper-box">
      <div class="swiper swiper1" :class="'swiper-active'+tag" >
        <div>
          <span>Slice 1 - Image 1</span>
          <span>Slice 1 - Image 2</span>
          <span>Slice 1 - Image 3</span>
          <span>Slice 1 - Image 4</span>
        </div>
        <div>
          <span>Slice 2 - Image 1</span>
          <span>Slice 2 - Image 2</span>
          <span>Slice 2 - Image 3</span>
          <span>Slice 2 - Image 4</span>
        </div>
        <div>
          <span>Slice 3 - Image 1</span>
          <span>Slice 3 - Image 2</span>
          <span>Slice 3 - Image 3</span>
          <span>Slice 3 - Image 4</span>
        </div>
        <div>
          <span>Slice 4 - Image 1</span>
          <span>Slice 4 - Image 2</span>
          <span>Slice 4 - Image 3</span>
          <span>Slice 4 - Image 4</span>
        </div>
      </div>
      <div class="swiper-pagination">
        <span :class="[tag === 1 && 'active']" @click="handleTag(1)">1</span>
        <span :class="[tag === 2 && 'active']" @click="handleTag(2)">2</span>
        <span :class="[tag === 3 && 'active']" @click="handleTag(3)">3</span>
        <span :class="[tag === 4 && 'active']" @click="handleTag(4)">4</span>
      </div>
      <div class="swiper-titles">
					<h3 :class="[tag === 1 && 'title-active']">
            <span>Serendipity</span>
            <span>What you've been dreaming of</span>
          </h3>
					<h3 :class="[tag === 2 && 'title-active']">
            <span>Adventure</span>
            <span>Where the fun begins</span>
          </h3>
					<h3 :class="[tag === 3 && 'title-active']">
            <span>Nature</span>
            <span>Unforgettable eperiences</span>
          </h3>
					<h3 :class="[tag === 4 && 'title-active']">
            <span>Serenity</span>
            <span>When silence touches nature</span>
          </h3>
			</div>
    </div>
  </div>
</template>
<script>
import Header from '@/commond/header.vue'
export default {
  components:{
    Header
  },
  data(){
    return {
      tag: 1,  
      frist: false
      // data: [
      //   {
      //     img: 'swiper1.jpg',
      //     title: 'title1',

      //   }
      // ]
        
        
    }
  },
  mounted(){
    this.intervalTag()
    
  },
  methods: {
    handleTag(tag){
      this.tag = tag
    },
    intervalTag(){
      setInterval(this.addTag,4000)
    },
    addTag(){
      console.log(this.tag)
      if(this.tag === 4){
        this.tag = 1
      } else {
        this.tag ++ 
      }
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin'
// @mixin bgImg($num)
//   background: url('~@/assets/img/swiper#{$num}.jpg') no-repeat

.swiper-titles h3 
  position: absolute
  top: 45%
  width: 100%
  opacity: 0
  transition: all 1s ease
  span
    display: block
    transition: all 1s ease
    &:nth-child(1)
      font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif
      color: #fff
      font-size: 1rem
      font-weight: 500
      letter-spacing: .1rem
      transform: translateY(-80%)
    &:nth-child(2)
      font-family: Cambria, Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif
      font-size: .3rem
      color: #fff
      padding: .1rem 0
      background: rgba(104,171,194,0.7)
      font-style: italic

.title-active 
  z-index: 20
  opacity: 1!important
  span
    &:nth-child(1)
      transform: translateY(0)!important

.swiper-box
  height: 5rem
  // border: 1px solid #666
  // margin-top: 5rem
  position: relative
.swiper
  position: relative
  // top: 5rem
  height: 5rem
  display: flex
  transition: all 0s .6s
  overflow: hidden
  background: #fff
  div
    position: relative
    width: 25%
    height: 100%
    font-size: $desc-size
    &:nth-child(n+1)
      border-left: 1px solid #fff
      border-image: linear-gradient(rgba(0,0,0,0),rgba(255,255,255,1)) 1
    span
      display: inline-block
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 5rem
      z-index: 2
      text-indent: -9000px
      transform-style: preserve-3d
      transition: all .7s ease-out 
      &:nth-child(1)
        +bg-img(swiper1)
      &:nth-child(2)
        +bg-img(swiper2)
      &:nth-child(3)
        +bg-img(swiper3)
      &:nth-child(4)
        +bg-img(swiper4)
    &:nth-child(1)
      span
        background-position: 0% 0px
        
    &:nth-child(2)
      span
        background-position: 33.3% 0px
    &:nth-child(3)
      span
        background-position: 66.6% 0%
    &:nth-child(4)
      span
        background-position: 100% 0%
    // &:nth-child(odd)
    //   span
    //   +animation(slideOutUp)     
    &:nth-child(even)
      span
        top: -5rem
    //动画类的定义


.swiper-active1
  +bg-img(swiper1)
  div:nth-child(odd)
    span:nth-child(1)
      transform: translateY(-5rem)
  div:nth-child(even)
    span:nth-child(1)
      transform: translateY(5rem)

.swiper-active2
  +bg-img(swiper2)
  div:nth-child(odd)
    span:nth-child(2)
      transform: translateY(-5rem)
  div:nth-child(even)
    span:nth-child(2)
      transform: translateY(5rem)
.swiper-active3
  +bg-img(swiper3)
  div:nth-child(odd)
    span:nth-child(3)
      transform: translateY(-5rem)
  div:nth-child(even)
    span:nth-child(3)
      transform: translateY(5rem)
.swiper-active4
  +bg-img(swiper4)
  div:nth-child(odd)
    span:nth-child(4)
      transform: translateY(-5rem)
  div:nth-child(even)
    span:nth-child(4)
      transform: translateY(5rem)
    


 
  

.swiper-pagination
  position: absolute
  bottom: .2rem
  z-index: 999
  // margin: 0 auto
  text-align: center
  width: 100%
  font-size: $small-size
  color: #fff
  font-style: oblique
  span
    display: inline-block
    width: .5rem
    height: .5rem
    border-radius: .5rem
    line-height: .5rem
    background: rgba(130,195,217,0.7)
    margin: 0 4px
    box-shadow: 0px 0px 0px 2px rgba(255,255,255,0.3)
  .active
    color: rgba(130,195,217,0.9) 
    background: rgba(255,255,255,0.9)   
@keyframes slideOutUp
  0%
    top: 0
  100%
    top: -5rem
@keyframes slideOutDown
  0%
    top: 0
  100%
    top: 5rem
@keyframes titleIn
  0%
    transform: translateY(10%)
  100%
    transform: translateY(45%)
</style>



