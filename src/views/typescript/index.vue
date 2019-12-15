<template>
  <div class="container">
    应用
    <TypeScript></TypeScript>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TypeScript from '@/components/typescript.vue'
// import { AdsListGet } from '../common/api/api'
@Component({
  name: 'Test',
  components: {
    TypeScript
  }
})
export default class extends Vue {
  private Loading = true;
  created () {
    this.getList();
  }
  private async getList() {
    this.Loading = true;
    // const { data } = await getArticles(this.listQuery)
  }
}
</script>
<style lang="less">
</style>
