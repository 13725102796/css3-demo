<template>
  <div class="wrapper menu">
    <Header :title="'Menu'"/>
    <section class="container">
      <ul class="mh-menu">
				<li v-for="item in data" :class="[tag === item.id && 'active']">
          <a @click="handleNav(item.id)"><span>{{item.title}}</span> <span :style="{color: (tag === item.id ? item.color : '')}">{{item.desc}}</span></a>
          <img src="~@/assets/img/menu3.jpg" />
        </li>
				<!-- <li :class="[tag === 2 && 'active']"><a @click="handleNav(2)"><span>Production Coordinator</span> <span>Francis Morgan</span></a><img src="~@/assets/img/menu2.jpg" alt="image02"/></li>
				<li :class="[tag === 3 && 'active']"><a @click="handleNav(3)"><span>Sound</span> <span>Kevin Schneider</span></a><img src="~@/assets/img/menu3.jpg" alt="image03"/></li>
				<li :class="[tag === 4 && 'active']"><a @click="handleNav(4)"><span>Casting</span> <span>Benjamin Zakalis</span></a><img src="~@/assets/img/menu4.jpg" alt="image04"/></li> -->
			</ul>
    </section>
  </div>
</template>
<script>
import Header from '@/commond/header.vue'
export default {
  data(){
    return {
      tag: 1,
      data: [
        {
          id: 1,
          title: 'title1',
          desc: 'This is desc1',
          color: '#ae3637',
          img: './../assets/img/menu1.jpg'
        },{
          id: 2,
          title: 'title',
          desc: 'This is desc2',
          color: '#c3d243',
          img: '~@/assets/img/menu2.jpg'
        },{
          id: 3,
          title: 'title1',
          desc: 'This is desc3',
          color: '#d38439',
          img: '~@/assets/img/menu3.jpg'
        },{
          id: 4,
          title: 'title1',
          desc: 'This is desc4',
          color: '#8e7463',
          img: '~@/assets/img/menu4.jpg'
        }
      ]
    }
  },
  components:{
    Header
  },
  methods:{
    handleNav(tag){
      this.tag = tag
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin'
.container
  width: 100%
  margin: 0 auto
  background: #fff
  padding: 1rem 0
.mh-menu
  // margin: 0 10%
  position: relative 
  li 
    width: 50%
    a
      position: relative
      display: block
      z-index: 1 
      width: 100%
      text-align: right
      padding-top: .2rem 
      height: 1.8rem
      border-right: 1px solid #ddd
      box-sizing: border-box
      transition: all 1s ease
      span
        text-transform: uppercase
        display: block
        padding: .1rem .2rem
        &:nth-child(1)
          font-size: $desc-size
          font-family: 'Alegreya SC', Georgia, serif
          color: #ddd
        &:nth-child(2)
          font-size: .45rem
          font-family: 'Alegreya SC', Georgia, serif
          font-style: italic
          color: #333
          transition: all 1s ease
          &:first-letter
            font-size: .55rem
    img
      // display: none
      height: 1.8*4rem
      width: 40%
      background-size: 100% 100%
      position: absolute
      top: 0
      left: 0
      transition: all 1s ease
      opacity: 0
      z-index: 0

.active
  background: rgba(225,239,240, .8)
  a
    // background: rgba(255,255,255, 1)
    // span:nth-child(2)
    //   color: red!important
  img
    left: 50%!important
    opacity: 1!important
  
</style>


