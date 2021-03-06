import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { sync } from 'vuex-router-sync';
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false;
sync(store, router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
