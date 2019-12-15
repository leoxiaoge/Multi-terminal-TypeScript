import { RouteConfig } from 'vue-router'
// import Layout from '@/views/typescript-template.vue'
const componentsRouter: RouteConfig = {
  path: '/components',
  // component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      // component: () => import(/* webpackChunkName: "tinymce" */ '@/views/components-demo/tinymce.vue'),
      name: 'TinymceDemo',
      meta: { title: 'tinymce' }
    }
  ]
}

export default componentsRouter