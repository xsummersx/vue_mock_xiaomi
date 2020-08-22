import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/product.vue'),
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/detail.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
