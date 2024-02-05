import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BorjaMoll from '../views/BorjaMoll.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: '/borjamoll2',
        name: 'borja moll 2',
        component: BorjaMoll
      }
    ]
  },
  {
    path: '/borjamoll',
    name: 'borja moll',
    component: BorjaMoll
  },
  {
    path: '/borjamoll/:id',
    name: 'borja moll',
    component: BorjaMoll
  }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
