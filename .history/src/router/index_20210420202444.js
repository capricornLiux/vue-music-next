import { createRouter, createWebHashHistory, createWebHashHistory } from 'vue-router'

const recommend = () => import(/* webpackChunkName: "recommend" */ '../views/recommend')

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
