<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">KCoin Explorer</b-navbar-brand>
    </b-navbar>
    <b-container>
      <h3>Latest blocks</h3>
      <b-table striped responsive :items="blocks" :fields="fields"></b-table>
    </b-container>
  </div>
</template>

<script>
import http from './http'
import moment from 'moment'

export default {
  name: 'app',
  data () {
    return {
      blocks: [],
      fields: [
        { key: 'hash', label: 'Block hash' },
        { key: 'transactions', label: 'Transactions', formatter: trxns => trxns.length },
        { key: 'timestamp', label: 'Age', formatter: ts => moment.unix(ts).fromNow(true) },
        'difficulty',
        'nonce'
      ]
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
