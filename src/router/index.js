import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    // --- Tambahkan rute baru di sini ---
    {
      path: '/tagihan',
      name: 'tagihan',
      // Menggunakan "Lazy Loading" (direkomendasikan agar website lebih cepat)
      component: () => import('../views/Tagihan.vue') 
    },
    {
      path: '/layananku',
      name: 'layananku',
      component: () => import('../views/Layananku.vue') 
    }
  ]
})

export default router