<template>
  <div class="home">
    <Header></Header>
    <hello-world msg="vue.js"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import HelloWorld from '@/components/HelloWorld.vue';
@Component({
  components: {
    Header,
    HelloWorld
  }
})
export default class Home extends Vue {
  private Loading = true;
  created () {
    this.getList();
    if (process.env.isMiniprogram) {
      console.log('I am in isMiniprogram');
      wx.showModal({
        title: '提示',
        content: '这是一个小程序原生弹窗',
        success (res: any) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
    if (process.env.isMiniprogram) {
      console.log('I am in isMiniprogram!');
    }
    if (process.env.isH5) {
      console.log('I am in isH5');
    }
    if (process.env.isMobile) {
      console.log('I am in isMobile');
    }
  }

  private async getList() {
    this.Loading = true;
    // const { data } = await getArticles(this.listQuery)
  }
}
</script>
