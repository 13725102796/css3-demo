<template>
  <div class="wrapper">
    <van-row class="wrap_row">
      <van-col span="6" class="left_wrapper">
        <div>
          <div class="cate_item text_center" :class="{'active': currentRoute == item.route}" v-for="(item, index) in categoryList" :key="item.title" @click="onClick(item.route)">
            {{item.title}}
          </div>
        </div>
      </van-col>
      <van-col class="category_wrapper" span="18">
        <router-view :key="currentRoute">

        </router-view>
      </van-col>
    </van-row>  
  </div>  
</template>
<script>
import { Row, Col } from 'vant';
import Vue from 'vue'
Vue.use(Row).use(Col);

export default {
  data() {
    return {
      currentRoute: location.pathname.split('plugin')[1],
      searchWord: "",
      flag: true,
      categoryList: [
        {
          title: "车牌号",
          route: "/carNumber"
        },{
          title: "银行卡",
          route: "/bankCard"
        },{
          title: "oss上传",
          route: "/ossImg"
        },
      ],
    };
  },
  methods: {
    onClick (index) {
      if(this.currentRoute == index) return
      this.currentRoute = index
      this.$router.replace('/plugin' + index)
      // 此处切换数据
    },
    
  },
  created(){
      // console.log(location.pathname.split('plugin')[1])
    }
};
</script>


<style lang="sass" scoped>
@import '~@/assets/css/mixin.sass'
.wrapper, .wrap_row, .left_wrapper
  height: 100%
.fz-12
  font-size: 12px
.text_center
  text-align: center
.left_wrapper
  display: block
  background: #ebedf0
  border-right: 1px solid rgba(244,244,244,1)
  .cate_item
    font-size: 15px
    color: #333
    margin: 15px 0
    padding: 1px 0
    height: 30px
    line-height: 30px
  .active
    color: #FE2C60
    background: #FFF6F7
    border-left: 2px solid #FE2C60
.category_wrapper
  // padding: 20px 10px 10px
  box-sizing: border-box
.cate_title
  span
    @include line-before-after
    &:after
      right: 30%
    &:before
      left: 30%
.img
  width: 100%
  height: 100px
.search
   margin: 10px 0
.list_wrapper
  padding: 10px
  .list_item
    padding: 10px
    float: left
  img
    width: 60px
    height: 60px
    border-radius: 50%
    margin-bottom: 8px
</style>
