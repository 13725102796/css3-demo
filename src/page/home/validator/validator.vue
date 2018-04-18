<template>
  <div class="wrapper freeRegister">
    <div class="content">
      <div class="list">
        <label for="name">姓<span class="none">撑开</span>名<span class="red">*</span></label>
        <input name="name" id="name" tag="姓名" v-va type="text" placeholder="请输入您的姓名" />
      </div>
      <div class="list">
        <label class="lable">姓<span class="none">撑开</span>别</label>
        <div class="sex">
          <span :class="[tag === 1 && 'active']" @click="selectSex(1)">男</span>
          <span :class="[tag === 2 && 'active']" @click="selectSex(2)">女</span>
        </div>  
      </div>
      <div class="list">
        <label for="phone">手机号码<span class="red">*</span></label>
        <input name="iphone" tag="手机号码" v-va.Mobile="['mobile']" id="phone" type="number" placeholder="请输入您的手机号码"/>
      </div>
      <div class="list">
        <label for="company" >单<span class="none">撑开</span>位<span class="red">*</span></label>
        <input id="company" tag="单位" name="company" v-va="['company']" type="text" placeholder="请输入您的单位名称"/>
      </div>
      <div class="list">
        <label for="department">部<span class="none">撑开</span>门</label>
        <input id="department" />
      </div>
      <div class="list">
        <label for="occupation">职<span class="none">撑开</span>称</label>
        <input id="occupation"/>
      </div>
    </div>
    <button class="submit" v-va-check>提交</button>   
  </div>
</template>
<script>
// import xxx from '@/components/xxx'
import Vue from 'vue'
import validator from '@/plugins/validator/validator'

Vue.use(validator)
export default {
  components: {

  },
  data(){
    return {
      tag: 1
    }
    
  },
  methods:{
    selectSex(tag){
      this.tag = tag
    },
    submit(){
      this.$toast({msg:'提交成功'})
    }

  }

  
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin'
.none
  visibility: hidden
.content
  padding-top: 20px
.list
  width: 100%
  display: flex
  height: 90px
  line-height: 90px
  font-size: $title-size
  background: #fff
  box-sizing: border-box
  +border-line(1px)
  // +border-line(1px, bottom)
  
  margin-bottom: 20px
  label
    width: 25%
    color: $desc-color
    .red
      color: #ff8080
  input
    +title
    width: 80%
    border: none
    margin: 15px 10px
    &:focus
      outline: none
  .sex
    width: 80%
    margin: 15px 10px
    border: 1px solid #00A3FE; /*no*/
    border-radius: 4px; /*no*/
    line-height: 60px
    span
      display: inline-block
      color: $desc-color
      width: 49.23%
      height: 100%
    .active
      color: #fff
      background: #00A3FE
       

.submit
  margin-top: 1rem
  width: 440px
  height: 74px
  line-height: 74px
  color: #fff
  background-image: linear-gradient(-90deg, #38bbff 0%, #5398ff 100%), linear-gradient(#ffffff, #ffffff)
  border-radius: 37px
  box-shadow: 0px 4px 5px 0px rgba(18, 191, 255, 0.24);/*no*/
  font-size: .38rem!important
</style>