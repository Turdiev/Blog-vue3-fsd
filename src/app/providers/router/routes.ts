
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home/ui/HomePage.vue'),
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('@/pages/Detail/ui/DetailPage.vue')
  },
]
