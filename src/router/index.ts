import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CounterView from '../views/study/CounterView.vue'
import NoteView from '../views/study/NoteView.vue'
import QuizView from '../views/study/QuizView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuizView
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
