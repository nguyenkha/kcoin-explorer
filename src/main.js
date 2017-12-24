import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import LatestBlocks from './LatestBlocks.vue'
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Add bootstrap vue
Vue.use(BootstrapVue)

// Add router
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'latest-blocks',
    component: LatestBlocks
  }
]

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
