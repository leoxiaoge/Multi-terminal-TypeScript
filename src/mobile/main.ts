import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { sync } from 'vuex-router-sync';
Vue.config.productionTip = false;
sync(store, router);
/* eslint-disable no-new */
document.addEventListener('deviceready', () => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  });
  const navigator: any = window.navigator;
  navigator.splashscreen.hide();
}, false);
