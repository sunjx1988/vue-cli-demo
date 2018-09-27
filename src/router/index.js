import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {title: 'helloworld'},
      component: Layout,
      hidden: true,
      redirect: '/helloworld',
      children: [
        {
          path: 'helloworld',
          hidden: true,
          component: () => import('@/components/HelloWorld')
        }
      ]
    },
    {
      path: '/first',
      name: 'firstPage',
      meta: {title: 'first'},
      component: Layout,
      redirect: '/first/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/first')
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
