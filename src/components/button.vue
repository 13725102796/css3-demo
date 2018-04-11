<template>
<div class="container">
  <button>{{text}}</button>
</div>

</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  props: {
    text: {
      type: String,
      default: '按钮'
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin.sass'
.container
  button
    font-size: $desc-size
    color: $desc-color
    border: 1px solid #e5e5e5
    background: #fff
    padding: .3rem .5rem
    border-radius: 4px
    &:focus
      outline: none



</style>


