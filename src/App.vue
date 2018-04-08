<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route'(to,from) {
      const toName = to.name 
      const fromName = from.name
      // console.log(fromName + 'from')
      // console.log(toName)
      //添加一级路由
      const routeArr = ['Home','Order','My']
      // console.log(routeArr.indexOf(fromName))
      const handle = (toName,fromName) => {
        if(routeArr.indexOf(fromName) > -1) {
          //符合footer跳转
          if(routeArr.indexOf(toName) >-1 ) {
            if(toName == 'Order') return true
            return false
          } else {
            return true
          }
          
          return false
        } else {
          return false
        }
      }
      let isBack = handle(toName,fromName)

      this.transitionName = isBack ? 'slide-right' : 'slide-left' 
      // console.log(isBack)   
    }
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  /* margin-top: 60px; */ 
  font-size: .5rem;
  background-color: #f0efed;
  height: 100%;
  /* position: relative; */
	width: 100%;
	height: 100%;
	-webkit-overflow-scrolling: touch;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.child-view {
  /* position: absolute; */
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(30%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-30%, 0);
}

</style>
