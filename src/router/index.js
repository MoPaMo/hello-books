import { createRouter, createWebHistory } from "vue-router";
import XLCategories from "./../components/XLCategories.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: XLCategories,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
