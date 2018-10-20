import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/NorthOrSouth',
      name: 'NorthOrSouth',
      component: () => import('./views/NorthOrSouth.vue')
    },
    {
      path: '/selectRoute',
      name: 'selectRoute',
      component: () => import('./views/selectRoute.vue')
    },
    {
      path: '/selectMember',
      name: 'selectMember',
      component: () => import('./views/selectMember.vue')
    },
    {
      path: '/selectSupplies',
      name: 'selectSupplies',
      component: () => import('./views/selectSupplies.vue')
    },
    {
      path: '/openCamera',
      name: 'openCamera',
      component: () => import('./views/openCamera.vue')
    },
  ]
})
