import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './pages/HelloWorld.vue'
import Login from './pages/login/Index.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/home',
        name: 'HelloWorld',
        component: HelloWorld
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }]
})