<template>
  <div class="header">
    <i class="goback" @click="goback()"></i>
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods:{
    goback(){
      this.$router.push({path: 'Home'})
    }
  },
  props:{
    title:{
      type: String,
      default: 'title'
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin.sass'
.header
  background: #fff
  height: 1.2rem
  +border-line(1px,bottom)
  position: relative
  line-height: 1.2rem
  color: $green-color
  letter-spacing: 2px
  z-index: 99
  width: 100%
  p 
    width: 100%
  .goback:after
    content: ''
    display: block
    position: absolute
    left: .8rem
    top: 50%
    width: .25rem
    height: .25rem
    -webkit-transform: translateY(-50%) rotate(45deg)
    transform: translateY(-50%) rotate(45deg)
    border-left: .04rem solid $green-color
    border-bottom: .04rem solid $green-color
</style>