import Vue from 'vue';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
// import Home from '@/views/index.vue';

Vue.use(Router);

// const router = new Router({
//   mode: 'history',
//   routes: [{
//     path: '/(home|index)?',
//     name: 'Home',
//     component: Home
//   }]
// });

export default function createApp () {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  Vue.config.productionTip = false;

  sync(store, router);

  return new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });
}

