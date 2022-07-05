import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import UrlBack from '../pages/url-back.vue'

// 解决 vue-router 升级导致的 Uncaught(in promise)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


export default new VueRouter({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/urlback',
      name: 'urlback',
      component: UrlBack
    }
  ]
})