<template>
  <div class="container">
    <Header></Header>
    <a href="/home">回到首页</a>
    <button @click="onClickJump">回到首页</button>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  created () {
    console.log('created')
  },
  methods: {
    onClickJump () {
      window.location.href = '/'
    }
  }
})
</script>
<style lang="less">
.cnt {
  margin-top: 20px;
}
a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}
</style>
