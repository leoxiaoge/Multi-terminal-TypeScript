<template>
  <div class="container">
    应用
    <TypeScript></TypeScript>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TypeScript from '../components/typescript.vue'
@Component({
  name: 'Test',
  components: {
    TypeScript
  }
})
export default class extends Vue {
}
</script>
<style lang="less">
</style>
