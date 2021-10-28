import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    component: () => import('@/views/Register')
  },
  { 
    path: '',
    component: () => import('@/views/Dashboard'),
    children: [
      
      {
        path: '/',
        component: () => import('@/views/Index') 
      },
      {
        path: '/catalog-admin',
        component: () => import('@/views/Admin/Catalog')
      },
      {
        path: '/companies-admin',
        component: () => import('@/views/Admin/Companies')
      },
      {
        path: '/recruit-admin',
        component: () => import('@/views/Admin/Recruit')
      },
      {
        path: '/profile-companies',
        component: () => import('@/views/Companies/Profile')
      },
      {
        path: '/profile-recruit',
        component: () => import('@/views/Recruit/Profile')
      },
      {
        path: '/personal-details-recruit',
        component: () => import('@/views/Recruit/PersonalDetails')
      },
      
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
