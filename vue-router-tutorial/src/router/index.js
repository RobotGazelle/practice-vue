import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Account from '@/components/Account'
import Contact from '@/components/Contact'
import Friends from '@/components/Friends'
import Friend from '@/components/Friend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/friends/:id/:age/:weight',
      name: 'Friends',
      props: true,
      component: Friends
    },
    // {
    //   path: '/friend/:name/',
    //   name: 'Friend',
    //   component: Friend
    // },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
