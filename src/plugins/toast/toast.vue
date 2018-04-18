<template>
<div>
  <div v-if="mask" class="container" v-show="show">
    <div class="position">
      <p :style="{animation: style,transformOrigin: origin }" >{{msg}}</p>
    </div>   
  </div>
  <div v-else class="nomask" v-show="show">
    <div class="position">
      <p class="tips" ><span>{{msg}}</span></p>
    </div> 
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      show: true,
      msg: '',
      mask: true,
      // ms: 2,
      style: 'entry 2s ease',
      origin: 'center center'
    }
  },
  methods: {
    delayed(msg,mask,ms,method,top){
      console.log(mask)
      this.mask = mask
      this.msg = msg
      // this.ms = ms/1000 
      this.style = (method+ ' ' +ms/800 + 's' + ' ' + 'ease').toString() 
      if(top) this.origin = 'center top'
     
      console.log(this.style)
      setTimeout(()=>{
        this.show = false
      },ms)
    }
  },
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin.sass'
.nomask
  .tips
    background: #000000e0
    color: #fff
    padding: .25rem .5rem
    border-radius: .15rem 
    font-size: $title-size
.position
  position: fixed
  left: 50%
  top: 50%
  transform: translate3d(-50%,-50%,0)
  font-size: $desc-size
  color: $desc-color
.container
  +mask(rgba(0,0,0,.3),9999)
  // .position
  //   position: fixed
  //   left: 50%
  //   top: 50%
  //   transform: translate3d(-50%,-50%,0)
  //   font-size: $desc-size
  //   color: $desc-color
  p   
    padding: .5rem 1rem
    background: #fff
    transform-style: preserve-3d
      // animation-timing-function: ease
      // -webkit-animation: entry 2s ease
    // .leave
    //   -webkit-animation: leave .5s ease
// @keyframes entry 
//   0%, 100%
//     opacity: 0
//     transform: rotateY(70deg)
//   30%,70% 
//     opacity: 1
//     transform: rotateY(0deg)

</style>
<style lang="sass">
@keyframes entry 
  0%, 100%
    opacity: 0
    transform: rotateY(70deg)
  30%,70% 
    opacity: 1
    transform: rotateY(0deg)
@keyframes translateX
  0%
    opacity: 0
    transform: translateX(-20%)
  30%,60% 
    opacity: 1
    transform: translateX(0)
  100%
    opacity: 0
    transform: translateX(20%)
@keyframes translateY
  0%,100%
    opacity: 0
    transform: translateY(-30%)
  30%,60% 
    opacity: 1
    transform: translateY(0)
@keyframes translateZ
  0%
    opacity: 0
    transform: scale(2) rotateX(20deg)
  30%,70% 
    opacity: 1
    transform: scale(1) rotateX(0deg)
  100%
    opacity: 0
    transform: scale(0) rotateX(-20deg)
@keyframes rotateX
  0%,100%
    opacity: 0
    transform: rotateX(-70deg)
  30%,70% 
    opacity: 1
    transform: rotateX(0)
@keyframes rotateY
  0%,100%
    opacity: 0
    transform: rotateY(-70deg)
  30%,70% 
    opacity: 1
    transform: rotateY(0)
@keyframes fixedTopX
  0%,100%
    opacity: 0
    transform: rotateX(-70deg)
    height: 0
  30%,70% 
    opacity: 1
    transform: rotateX(0)
    height: 100%
    
</style>


