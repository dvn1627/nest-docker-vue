import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Heroes from './views/Heroes.vue';
import Detail from './views/Detail.vue';
import Login from './views/Login.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

router.beforeEach( (to, from, next) => {
  const token = store.state.token;
  const protectedRoutes = [
    'dashboard',
    'heroes',
    'detail'

  ];
  if (protectedRoutes.includes(to.name) && !token) {
    next('/login');
  }
  next();
});

export default router;
