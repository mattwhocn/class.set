import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Circle from '@/components/Circle'
import Habit from '@/components/Habit'
import Find from '@/components/Find'
import Mine from '@/components/Mine'
import Less from 'less'
import Sass from 'sass'

Vue.use(Router)
Vue.use(Less)
Vue.use(Sass)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/circle',
      component: Circle
    }, {
      path: '/habit',
      component: Habit
    }, {
      path: '/find',
      component: Find
    }, {
      path: '/mine',
      component: Mine
    }
  ]
})
