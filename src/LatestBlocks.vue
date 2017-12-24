<template>
  <div>
    <h3>Latest blocks</h3>
    <b-table striped responsive="md" :items="blocks" :fields="fields"></b-table>
  </div>
</template>

<script>
import http from './http'
import moment from 'moment'
import _ from 'lodash'

export default {
  name: 'latest-blocks',
  data () {
    return {
      blocks: [],
      fields: [
        'height',
        { key: 'hash', label: 'Block Hash', formatter: hash => hash.slice(0, 16) + '...'},
        { key: 'transactions', label: 'Transactions', formatter: transactions => transactions.length },
        { key: 'timestamp', label: 'Age', formatter: ts => moment.unix(ts).fromNow(true) },
        'difficulty',
        'nonce',
        { key: 'totalSent', label: 'Total Sent' }
      ]
    }
  },
  created() {
    http.get('/blocks?limit=10&order=-1').then(response => {
      let count = response.headers['x-total-count']
      // Calculate height, output total
      this.blocks = response.data.map((b, i) => {
        b.height = count - i - 1
        b.totalSent = _.sum(b.transactions.map(transaction => {
          return _.sumBy(transaction.outputs, 'value')
        }))
        return b
      })
    }).catch(err => {
      console.log(err)
    });
  }
}
</script>
