import Vue from 'vue'
import Router from 'vue-router'

// import TodoList from '@/components/Works/TodoList'
// import FontAwesome from '@fortawesome/fontawesome-free'
// src/plugins/vuetify.js
// Vue.use(FontAwesome)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
