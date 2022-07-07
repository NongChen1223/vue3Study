import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import login from '@/view/login/login.vue';
import About from '@/view/about/about.vue';
import NotFound from '@/view/about/404.vue';
import Home from '@/view/home.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: login,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    /* 拦截捕获404 */
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
