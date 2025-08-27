import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/uidesigns',
      name: 'uidesigns',
      component: () => import('../views/DesignView.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/maptyproject',
      name: 'maptyproject',
      component: () => import('../views/MaptyView.vue'),
    },
    {
      path: '/piggame',
      name: 'piggame',
      component: () => import('../views/PigGameView.vue'),
    },
    {
      path: '/bankistproject',
      name: 'bankist',
      component: () => import('../views/BankistView.vue'),
    },
    {
      path: '/forkifyproject',
      name: 'forkify',
      component: () => import('../views/ForkifyView.vue'),
    },
  ],
})

export default router
