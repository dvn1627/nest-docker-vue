import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Heroes from './views/Heroes.vue';
import Detail from './views/Detail.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      path: '/user/:id',
      name: 'detail',
      component: Detail,
    }
  ],
});