import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Add vue-resource
Vue.use(VueResource)
// Add bootstrap vue
Vue.use(BootstrapVue)

// API base url
const API_URL = process.env.API_URL

// Set API base URL
Vue.http.options.root = API_URL

console.log('API url:', API_URL)

// Simple resource to get latest blocks
const blocks = []

new Vue({
  el: '#app',
  render: h => h(App)
})
