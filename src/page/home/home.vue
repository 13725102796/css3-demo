<template>
<div class="wrapper Home">
  <!-- <div class="title">home</div> -->
  <div class="classify transform">
    <p>transform demo</p>
    <router-link to="/Nav">nav</router-link>
    <router-link to="/Toast">Toast</router-link>
  </div>
  <div class="classify scroll">
    <p>scroll demo</p>
    <router-link to="/Scroll">scrollX</router-link>
    <!-- <router-link to="/Infinite">infinite</router-link> -->
    <router-link to="/UpToRefresh">UpToRefresh</router-link>
  </div>
  <div class="classify swiper">
    <p>swiper demo</p>
    <router-link to="/Swiper">swiper</router-link>
  </div>
  <div class="classify menu">
    <p>menu demo</p>
    <router-link to="/Menu">menu</router-link>
  </div>
  <div class="classify menu">
    <p>validator demo</p>
    <router-link to="/Validator">validator</router-link>
  </div>
  <div class="classify menu">
    <p>video meno</p>
    <router-link to="/Video">video</router-link>
  </div>
  <van-button plain type="primary" @click="$router.push('/plugin')">插件篇</van-button>
</div>
</template>
<script>

export default {
  name: 'Home'
}
</script>
<style lang="sass" scoped>
.classify
  padding: .2rem 0
  a
    margin: 0 .2rem
    display: inline-block
    text-decoration: underline
</style>


