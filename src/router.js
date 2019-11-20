import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from './pages/HelloWorld.vue'
import Login from './pages/login/Index.vue'
import Home from './pages/home/Index.vue'
import A from './pages/a/Index.vue'
import B from './pages/b/Index.vue'
import Main from '@/pages/products/main/Index.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: 'a',
      component: A,
    }, {
      path: 'b',
      component: B,
    }, {
      path: 'main',
      component: Main
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})