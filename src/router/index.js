import { createRouter, createWebHistory } from "vue-router";
import XLCategories from "./../components/XLCategories.vue";
import NotFound from "./../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: XLCategories,
  },

  //404 must be last
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  //404 must be last!
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
