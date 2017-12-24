<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">KCoin Explorer</b-navbar-brand>
    </b-navbar>
    <b-container>
      <router-view></router-view>
      
    </b-container>
    <div class="text-center"><small>KCoin Explorer &copy; 2017 Kha Do @ Busan, Republic of Korea.</small></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
