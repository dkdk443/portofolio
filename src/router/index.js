import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Me from '@/components/Me'
import Contact from '@/components/Contact'
import Work from '@/components/Work'
import Skill from '@/components/Skill'
// import TodoList from '@/components/Works/TodoList'
// import FontAwesome from '@fortawesome/fontawesome-free'
// src/plugins/vuetify.js
// Vue.use(FontAwesome)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },

    // {
    //   path: '/work/todo',
    //   name: 'todo',
    //   component: TodoList
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
  }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {x: 0, y: 0};
  }
})
