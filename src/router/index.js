import store from "@/store";
import LoginView from '@/views/LoginView'
import RegisterView from '@/views/RegisterView'
import UserView from '@/views/UserView.vue'
import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: "/",
    name: "board",
    component: () => import("@/views/BoardView.vue"),
    meta: {
      requiresAuth: true
    },
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
  },
  {
    path: '/settings',
    name: 'setting',
    component: () => import('@/views/SettingView'),
    meta: {
      requiresAuth: true
    },
    children: [{
      path: 'image/:id',
      name: 'userimg',
      props: true,
      component: UserView
    }]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const loggedIn = JSON.parse(localStorage.getItem('user')).authenticated
  store.commit('REVRESE_LOADING', {
    val: true,
    name: store.state.UserModule.user.name
  })
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({
      name: 'login'
    })
  } else if (!to.matched.some(record => record.meta.requiresAuth) && loggedIn) {
    next({
      name: 'board'
    })
  }
  next()
})
router.afterEach(() => {
  setTimeout(() => {
    store.commit('REVRESE_LOADING', {
      val: false,
      name: store.state.UserModule.user.name
    })
  }, 10)
})
export default router;