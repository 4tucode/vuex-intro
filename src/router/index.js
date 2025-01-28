import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'all',
    component: () => import('../views/allUsersView.vue')
  },
  {
    path: '/sorted',
    name: 'sorted',
    component: () => import('../views/sortedView.vue')
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../views/emailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
