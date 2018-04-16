<template>
  <div class="wrapper">
    <Header :title="'swiper'" />
    <div class="swiper-box">
      <div class="swiper swiper1" 
        :style="{backgroundImage: 'url('+data[tag-1].img+')'}"     
      >
        <div>
          <span v-for="img in data"  
            :style="{backgroundImage: 'url('+img.img+')',}"
            :class="[tag === img.id && 'transformTop' ]"
          >Slice 1 - Image 1</span>
          <!-- <span>Slice 1 - Image 2</span>
          <span>Slice 1 - Image 3</span>
          <span>Slice 1 - Image 4</span> -->
        </div>
        <div>
          <span v-for="img in data"  
            :style="{backgroundImage: 'url('+img.img+')'}"
            :class="[tag === img.id && 'transformBottom' ]"
          >Slice 1 - Image 1</span>
        </div>
        <div>
          <span v-for="img in data"  
            :style="{backgroundImage: 'url('+img.img+')',}"
            :class="[tag === img.id && 'transformTop' ]"
          >Slice 1 - Image 1</span>
        </div>
        <div>
          <span v-for="img in data"  
            :style="{backgroundImage: 'url('+img.img+')',}"
            :class="[tag === img.id && 'transformBottom']"
          >Slice 1 - Image 1</span>
        </div>
      </div>
      <div class="swiper-pagination">
        <span v-for="item in data" :class="[tag === item.id && 'active']" @click="handleTag(item.id)">{{item.id}}</span>
        <!-- <span :class="[tag === 2 && 'active']" @click="handleTag(2)">2</span>
        <span :class="[tag === 3 && 'active']" @click="handleTag(3)">3</span>
        <span :class="[tag === 4 && 'active']" @click="handleTag(4)">4</span> -->
      </div>
      <div class="swiper-titles">
					<h3 v-for="item in data" :class="[tag === item.id && 'title-active']">
            <span>{{item.title}}</span>
            <span>{{item.desc}}</span>
          </h3>
					<!-- <h3 :class="[tag === 2 && 'title-active']">
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
          </h3> -->
			</div>
    </div>
  </div>
</template>
<script>
/**
  使用方法：
    直接替换this.data的数据就可以了 img必须是线上的图片地址，
    或者可以将其写死，对应附上对应的class
    因为动态绑定的backgroundImage 貌似不能动态引入url
 */
import Header from '@/commond/header.vue'
export default {
  components:{
    Header
  },
  data(){
    return {
      tag: 1,  
      data: [
        {
          id: 1,
          img: 'http://localhost:8080/static/img/swiper1.35449c7.jpg',
          title: 'title1',
          desc: 'this is the desc1'
        },{
          id: 2,
          img: 'http://localhost:8080/static/img/swiper2.4c5bfc7.jpg',
          title: 'title2',
          desc: 'this is the desc2'
        },{
          id: 3,
          img: 'http://localhost:8080/static/img/swiper3.06cf7ca.jpg',
          title: 'title3',
          desc: 'this is the desc3'
        },{
          id: 4,
          img: 'http://localhost:8080/static/img/swiper4.fcd45e1.jpg',
          title: 'title4',
          desc: 'this is the desc4'
        },{
          id: 5,
          img: 'http://localhost:8080/static/img/swiper3.06cf7ca.jpg',
          title: 'title5',
          desc: 'this is the desc5'
        }
      ],
      setIntervalNum: '' , 
    }
  },
  created(){
    this.intervalTag()
  },
  methods: {
    handleTag(tag){
      this.tag = tag
      if(this.setIntervalNum) {
        let state = false
        clearInterval(this.setIntervalNum)
        if(!state) {
          state = true
          setTimeout(()=>{
            this.intervalTag()
            state = false
          },2000)
        }
      }
    },
    intervalTag(){ 
      const interval = setInterval(this.addTag,4000)
      clearInterval(this.setIntervalNum)
      this.setIntervalNum = interval
    },
    addTag(){
      // console.log(this.tag)
      if(this.tag === this.data.length){
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
  background-image: url('~@/assets/img/swiper1.jpg')
  background-image: url('~@/assets/img/swiper2.jpg')
  background-image: url('~@/assets/img/swiper3.jpg')
  background-image: url('~@/assets/img/swiper4.jpg')
  background-size: 400%
  // background-clip: content-box
  // z-index: 3
  div
    position: relative
    width: 25%
    height: 100%
    font-size: $desc-size
    box-sizing: border-box
    &:nth-child(n+2)
      border-left: 1px solid 
      border-image: linear-gradient(rgba(225,225,225,0),rgba(225,225,225,.7)) 30 30
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
      background-size: 400%
      // &:nth-child(1)
      //   +bg-img(swiper1)
      // &:nth-child(2)
      //   +bg-img(swiper2)
      // &:nth-child(3)
      //   +bg-img(swiper3)
      // &:nth-child(4)
      //   +bg-img(swiper4)
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
.transformTop 
  transform: translateY(-5rem)
.transformBottom
  transform: translateY(5rem)
// .swiper-active1
//   // +bg-img(swiper1)
//   div:nth-child(odd)
//     span:nth-child(1)
//       transform: translateY(-5rem)
//   div:nth-child(even)
//     span:nth-child(1)
//       transform: translateY(5rem)

// .swiper-active2
//   // +bg-img(swiper2)
//   div:nth-child(odd)
//     span:nth-child(2)
//       transform: translateY(-5rem)
//   div:nth-child(even)
//     span:nth-child(2)
//       transform: translateY(5rem)
// .swiper-active3
//   // +bg-img(swiper3)
//   div:nth-child(odd)
//     span:nth-child(3)
//       transform: translateY(-5rem)
//   div:nth-child(even)
//     span:nth-child(3)
//       transform: translateY(5rem)
// .swiper-active4
//   // +bg-img(swiper4)
//   div:nth-child(odd)
//     span:nth-child(4)
//       transform: translateY(-5rem)
//   div:nth-child(even)
//     span:nth-child(4)
//       transform: translateY(5rem)
    


 
  

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



