<template>
  <div>
    <h3>Block</h3>
    <p>{{ block.hash }}</p>
    <h4>Summary</h4>
    <b-table striped responsive="md" :items="summary" :fields="summaryFields"></b-table>
    <h4>Transactions</h4>
    <b-table striped responsive="md" :items="transactions" :fields="transactionFields"></b-table>
  </div>
</template>

<script>
import http from './http'
import moment from 'moment'
import _ from 'lodash'

export default {
  name: 'block',
  data () {
    return {
      block: {},
      summary: [],
      summaryFields: [
        'name', 'value'
      ],
      transactions: [],
      transactionFields: [
        'hash',
        'inputs',
        'outputs'
      ]
    }
  },
  created() {
    http.get('/blocks/' + this.$route.params.id).then(response => {
      this.block = response.data;
      let totalOutput = _.sum(this.block.transactions.map(transaction => {
        return _.sumBy(transaction.outputs, 'value')
      }));
      this.summary = [
        { name: 'Previous Block', value: '<a href="#/blocks/' + this.block.previousBlockHash + '">' + this.block.previousBlockHash + '</a>' },
        { name: 'Number Of Transactions', value: this.block.transactions.length },
        { name: 'Timestamp', value: moment.unix(this.block.timestamp).format() },
        { name: 'Difficulty', value: this.block.difficulty },
        { name: 'Nouce', value: this.block.nonce },
        { name: 'Output Total', value: this.block.transactions.length }
      ];
      this.block.transactions.forEach(transaction => {
        this.transactions.push({
          hash: '<a href="#/transactions/' + transaction.hash + '">' + transaction.hash.slice(0, 16) + '...' + '</a>',
          inputs: transaction.inputs.map(i => '<a href="#/transactions/' + i.referencedOutputHash + '">' + i.referencedOutputHash.slice(0, 16) + '...' + '</a>' + '#' + i.referencedOutputIndex).join('<br>'),
          outputs: transaction.outputs.map((o, index) => '#' + index + ': <strong>' + o.value + '</strong> to ' + '<a href="#/addresses/' + o.lockScript.slice(4) + '">' + o.lockScript.slice(4, 16) + '...' + '</a>').join('<br>')
        });
      });
    }).catch(err => {
      console.log(err)
    });
  }
}
</script>
