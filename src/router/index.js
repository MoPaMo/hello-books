import { createRouter, createWebHistory } from "vue-router";
import XLCategories from "./../components/XLCategories.vue";
import NotFound from "./../views/NotFound.vue";
import FictionView from "./../views/Fiction.vue";
import NonFictionView from "@/views/NonFiction.vue";
import SearchPage from "@/views/Search.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: XLCategories,
  },
  { path: "/fiction", name: "Fiction", component: FictionView },

  { path: "/non-fiction", name: "Non-Fiction", component: NonFictionView },

  { path: "/search", name: "Search", component: SearchPage },

  //404 must be last
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  //404 must be last!
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
