import { createRouter, createWebHashHistory, createWebHashHistory } from 'vue-router'

const recommend = import('@/views/recommend'/* webpackChunkName: "recommend" */)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
