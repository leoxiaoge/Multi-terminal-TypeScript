<template>
  <div class="container">
    <Header></Header>
  </div>
</template>
<script>
import Vue from 'vue';
import Header from '@/common/Header.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Header
  },
  methods: {}
});
</script>
<style lang="less" scoped>
</style>
