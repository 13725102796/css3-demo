<template lang="html">
  <div class="yo-scroll"
  :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
  @touchstart="touchStart($event)"
  @touchmove="touchMove($event)"
  @touchend="touchEnd($event)"
  @scroll="(enableInfinite && infiniteState) ? onScroll($event) : undefined">
    <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
      <header class="pull-refresh" v-show="refreshShow">
        <slot name="pull-refresh">
           <span class="down-tip">
             <i class="icon-bottom"></i>
             <span>下拉更新</span>
            </span>
           <span class="up-tip">
             <i class="icon-top"></i>
             <span>松开更新</span>
           </span>
           <span class="refresh-tip">
             <Loading />
           </span>
        </slot>
      </header>
      <slot></slot>
      <footer id="loading" v-show="showLoad" class="load-more">
        <!-- <slot name="load-more">
          <span>加载中……</span>
        </slot> -->
        <Loading />
      </footer>
      <div></div>
    </section>
  </div>
</template>

<script>
import Loading from '@/plugins/loading/loading.vue'
export default {
  props: {
    offset: {
      type: Number,
      default: 40
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    }
  },
  data() {
    return {
      top: 0,
      state: 0,
      startY: 0,  //保存开始滑动时，y轴位置
      touching: false,
      infiniteLoading: false,
      refreshShow: true,
      infiniteState: true,
      showLoad: false
    }
  },
  created(){
    if(this.enableRefresh === false) {
      this.refreshShow = false
    }
  },
  methods: {
    touchStart(e) {
      // console.log(1)
      //记录手指触摸位置y轴位置
      if(!this.enableRefresh) return
      this.startY = e.targetTouches[0].pageY
      this.startScroll = this.$el.scrollTop || 0
      //开启滑动记录
      this.touching = true
    },
    touchMove(e) {
      // console.log(2)
      // console.log(e.preventDefault)
      // this.$el.scrollTop = 0 时代表复原在顶部
      // 这里控制是否可以上下拉    代表正在滑动 
      if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      //  获取拉取的间隔差   当前移动的y点      初始的y点        初始顶部距离
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
      //如果是往上滑的话，就取消事件
      if (diff > 0) e.preventDefault()
      // 对状态进行处理，看是否处于刷新中
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    touchEnd(e) {
      // console.log(e)
      if (!this.enableRefresh) return
      this.touching = false
      if (this.state === 2) { // in refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else { // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    refresh() {
      // 表示在刷新状态
      this.state = 2
      this.top = this.offset
      this.onRefresh(this.refreshDone)
    },
    refreshDone() {
      this.state = 0
      this.top = 0
      //下拉刷新后，对数据还原，获取第一页数据，重新注册滚轮事件
      
    },

    infinite() {
      this.infiniteLoading = true
      this.onInfinite(this.infiniteDone)
    },

    infiniteDone(length) {
      const self = this 
      if(length === 0) {
        //注销infinite事件
        self.infiniteState = false
      }
      this.showLoad = false
      self.infiniteLoading = false 
    },

    onScroll(e) {
      if (!this.enableInfinite || this.infiniteLoading) {
        return
      }
      let outerHeight = this.$el.clientHeight
      let innerHeight = this.$el.querySelector('.inner').clientHeight
      let scrollTop = this.$el.scrollTop
      let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0
      let infiniteHeight = this.$el.querySelector('.load-more').clientHeight
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight
      if (bottom < infiniteHeight ) {
        this.showLoad = true
        this.infinite()
      }
    }
  },
  components:{
    Loading
  }
}
</script>
<style lang="sass" scoped>
.command 
  display: inline-block
  width: .6rem
  height: .6rem
  vertical-align: -40%
  margin-right: 4px
.icon-bottom
  @extend .command
  background: url('~@/assets/img/bottomScroll.png') no-repeat
  background-size: 100%
.icon-top 
  @extend .command
  background: url('~@/assets/img/topScroll.png') no-repeat
  background-size: 100%
.yo-scroll 
  position: absolute
  top: 1rem
  right: 0
  bottom: 0
  left: 0
  overflow: auto
  -webkit-overflow-scrolling: touch
  height: 100%
  .inner 
  // position: absolute
  // top: -1.5rem
  // width: 100%
  transition-duration: 300ms 
  .pull-refresh 
  position: relative
  left: 0
  top: -1rem
  // width: 100%
  // height: 100%
  // display: flex
  // align-items: center
  // justify-content: center
  // font-size: .32rem
  // color: #666
.yo-scroll.touch .inner 
  transition-duration: 0ms

.yo-scroll.down .down-tip 
  display: block

.yo-scroll.up .up-tip 
  display: block

.yo-scroll.refresh .refresh-tip 
  display: block
  margin-top: .1rem 
.yo-scroll .down-tip,
.yo-scroll .refresh-tip,
.yo-scroll .up-tip 
  display: none

.yo-scroll .load-more 
  display: flex
  align-items: center
  justify-content: center


</style>