import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: ()=> import('@/views/Home.vue'),
  },
  {
    path: "/font",
    name: "font",
    component: ()=> import('&'),
  },
  {
    path: "/table",
    name: "table",
    component: ()=> import('@/views/table.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
