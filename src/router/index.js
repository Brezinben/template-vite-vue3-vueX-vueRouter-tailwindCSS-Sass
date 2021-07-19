import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "" },
  },
  {
    name: "",
    path: "",
    meta: { title: "" },
    component: App,
  },

  {
    path: "/:path(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
//
router.beforeEach((to, from, next) => {
  if (true) {
  } else next();
});

export default router;
