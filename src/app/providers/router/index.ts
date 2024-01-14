import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/app/providers/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
