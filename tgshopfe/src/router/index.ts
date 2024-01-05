import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import ShopViewVue from '@/views/ShopView.vue';
// import HomeView from '../views/HomeView.vue';

import ShopView from '@/views/vShopView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'shop',
    component: ShopView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/vCartView.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/vOrderView.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/vProductView.vue'),
  },

  /*
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/',
    name: 'shop',
    component: ShopViewVue,
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../views/FeedbackView.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
  },
  */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
