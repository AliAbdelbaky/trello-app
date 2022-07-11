import store from "@/store";
import LoginView from '@/views/LoginView'
import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
  path: "/",
  name: "board",
  component: () => import("@/views/BoardView.vue"),
  children: [{
    path: 'task/:id',
    name: 'task',
    props: true,
    component: () =>
      import("@/views/TaskView.vue"),
    beforeEnter: (to, from, next) => {
      store.dispatch('BoardModule/setSingleTask', to.params.id).then(() => {
        const single_task = store.state.BoardModule.signleTask
        to.params.task = single_task
        next()
      }).catch((err) => alert(`error is ${err}`))
    }
  }]
}, {
  path:'/login',
  name:'login',
  component: LoginView
}];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;