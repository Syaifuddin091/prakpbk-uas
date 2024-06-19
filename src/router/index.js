import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Weather from '../pages/Weather.vue'
import Index from '../pages/Index.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', 
        component: Index 
      },
      { path: 'Weather', 
        component: Weather 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
