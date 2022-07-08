import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
    path: "/",
    name: "board",
    component: () => import("@/views/BoardView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("@/views/TaskView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;