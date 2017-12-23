<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">KCoin Explorer</b-navbar-brand>
    </b-navbar>
    <b-table responsive :items="blocks"></b-table>
  </div>
</template>

<script>
import http from './http'

export default {
  name: 'app',
  data () {
    return {
      blocks: []
    }
  },
  created() {
    http.get('/blocks?limit=10&order=-1').then(response => {
      this.blocks = response.data
    }).catch(err => {
      console.log(err)
    });
  }
}
</script>

<style>

</style>
