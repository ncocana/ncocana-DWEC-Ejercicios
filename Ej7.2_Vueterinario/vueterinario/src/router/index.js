import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimalView from '../views/AnimalView.vue'
import AnimalListView from '../views/AnimalListView.vue'
import AnimalFormView from '../views/AnimalFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AnimalListView
  },
  {
    path: '/animal/:id',
    name: 'animal',
    component: AnimalView
  },
//   {
//     path: '/animalList',
//     name: 'animalList',
//     component: AnimalListView
//   },
  {
    path: '/animalForm',
    name: 'animalForm',
    component: AnimalFormView
  },
  {
    path: '/animalModify/:id',
    name: 'animalModify',
    component: AnimalFormView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
