import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@layout/main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@page/home.vue')
      }
    ]
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
