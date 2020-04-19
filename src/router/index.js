import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
// import AboutMe from '@/components/AboutMe'
// import Contact from '@/components/Contact'
// import Work from '@/components/Work'
// import TodoList from '@/components/Works/TodoList'
// import FontAwesome from '@fortawesome/fontawesome-free'
// src/plugins/vuetify.js
// Vue.use(FontAwesome)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    }
    // {
    //   path: '/me',
    //   name: 'aboutme',
    //   component: AboutMe
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact
    // },
    // {
    //   path: '/work',
    //   name: 'work',
    //   component: Work
    // },
    // {
    //   path: '/work/todo',
    //   name: 'todo',
    //   component: TodoList
    // }
  ]
})
