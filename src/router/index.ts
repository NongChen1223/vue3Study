import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import login from '@/view/login/login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: login
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
