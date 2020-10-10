import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/main/HelloWorld'
import TestPage from '../components/main/TestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Testpage',
      component: TestPage
    }
  ]
})
