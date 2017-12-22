import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

console.log('API url:', process.env.API_URL)

new Vue({
  el: '#app',
  render: h => h(App)
})
