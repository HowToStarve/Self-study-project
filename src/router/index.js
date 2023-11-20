import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/IndexView.vue'),
    strict: true
  }
]

const router = createRouter({
  history: createWebHistory('/personalProject/'),
  routes
})

export default router
