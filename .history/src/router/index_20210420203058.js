import { createRouter, createWebHashHistory } from 'vue-router'

const Recommend = () => import(/* webpackChunkName: "recommend" */ '../views/recommend')
const Singer = () => import(/* webpackChunkName: "recommend" */ '../views/singer')
const TopList = () => import(/* webpackChunkName: "recommend" */ '../views/top-list')
const Search = () => import(/* webpackChunkName: "recommend" */ '../views/search')

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
