<template>
  <div>
    <h1>{{ msg }} </h1>
    子组件
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'TypeScript'
})
export default class HelloWorld extends Vue {
  @Prop({ type: String }) msg!: string;
}
</script>
