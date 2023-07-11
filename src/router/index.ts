import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CounterView from '../views/study/CounterView.vue'
import NoteView from '../views/study/NoteView.vue'
import QuizView from '../views/study/QuizView.vue'
import * as HomeViewStudy from '../views/study/router/HomeView.vue'
import AboutView from '@/views/study/router/AboutView.vue'
import CarView from '@/views/study/router/CarView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewStudy.default
    },
    {
      path: '/study/router/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/study/router/cars/:id',
      name: 'cars',
      component: CarView
    },
    {
      path: '/hole',
      name: 'Hole',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/CanvasView.vue')
      component: () => import('../views/DragBox.vue')
    },
    {
      path: '/map',
      name: 'Map',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/CanvasView.vue')
      component: () => import('../views/Map.vue')
    }
  ]
})

export default router
