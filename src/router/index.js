import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'first',
    component: () => import(/* webpackChunkName: "index" */ '../views/First.vue'),
    strict: true
  },
  {
    path: '/second',
    name: 'second',
    component: () => import(/* webpackChunkName: "index" */ '../views/Second.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/personalProject/'),
  routes
})

export default router
