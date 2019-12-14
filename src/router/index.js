import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/views/typescript-template.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home
  }]
})
