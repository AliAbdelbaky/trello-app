import store from "@/store";
import LoginView from '@/views/LoginView'
import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
  path: '/login',
  name: 'login',
  component: LoginView,
  meta: {
    auth: false
  }
}, 
{
  path: "/",
  name: "board",
  component: () => import("@/views/BoardView.vue"),
  meta: {
    auth: true
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
  path:'/settings',
  name:'setting',
  component: ()=>import('@/views/SettingView'),
  meta: {
    auth: true
  }
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  store.commit('REVRESE_LOADING', {
    val: true,
    name: store.state.UserModule.user.name
  })
  if (to.meta.auth && !store.state.UserModule.user.authenticated) {
    next('/login')
  } else if (!to.meta.auth && store.state.UserModule.user.authenticated) {
    next('/')
  } else {
    next()
  }
})
router.afterEach(() => {
  setTimeout(() => {
    store.commit('REVRESE_LOADING', {
      val: false,
      name: store.state.UserModule.user.name
    })
  }, 1020)
})
export default router;