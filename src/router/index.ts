import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CounterView from '../views/study/CounterView.vue'
import QuizMenuView from '@/views/study/quiz/MenuView.vue'
import QuizView from '@/views/study/quiz/QuizView.vue'
import * as HomeViewStudy from '../views/study/router/HomeView.vue'
import AboutView from '@/views/study/router/AboutView.vue'
import CarView from '@/views/study/router/CarView.vue'
import ContactView from '@/views/study/router/ContactView.vue'
import NotFoundView from '@/views/study/router/404View.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/study/quiz'
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/study/quiz',
      name: 'QuizMenu',
      component: QuizMenuView
    },
    {
      path: '/study/quiz/:id',
      name: 'Quiz',
      component: QuizView
    },
    { // todo: about, car 묶기 
      path: '/study/router',
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
      component: CarView,
      children: [
        {
          path: "contact",
          component: ContactView
        },
      ],
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
    },
    {
      path: '/:catchall(.*)*',
      name: 'Not Found',
      component: NotFoundView
    }
  ]
})

export default router
