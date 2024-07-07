import { createRouter, createWebHistory } from "vue-router";
import XLCategories from "./../components/XLCategories.vue";
import NotFound from "./../views/NotFound.vue";
import FictionView from "./../views/Fiction.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: XLCategories,
  },
  { path: "/fiction", name: "Fiction", component: FictionView },

  //404 must be last
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  //404 must be last!
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
