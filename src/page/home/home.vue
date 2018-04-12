<template>
<div class="wrapper Home">
  <div class="title">home</div>
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
</style>


