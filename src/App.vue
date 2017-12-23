<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">KCoin Explorer</b-navbar-brand>
    </b-navbar>
    <b-table responsive :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: []
    }
  }
}
</script>

<style>

</style>
