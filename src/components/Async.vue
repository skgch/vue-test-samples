<template>
  <button @click="fetchResultsES6" />
</template>

<script>
  import axios from 'axios'
  import api from '@/api/sample.js'

  export default {
    data () {
      return {
        value: null
      }
    },

    methods: {
      fetchResultsES6 () {
        axios.get('http://example.com/api')
          .then(res => this.value = res.data)
          .catch(err => this.value = err)
      },

      async fetchResultsES7 () {
        try {
          const res = await axios.get('http://example.com/api')
          this.value = res.data
        } catch (err) {
          this.value = err
        }
      },

      fetchResultsWithApiES6 () {
        api.fetchData()
          .then(res => this.value = res.data)
          .catch(err => this.value = err.message)
      },

      async fetchResultsWithApiES7 () {
        try {
          const res = await api.fetchData()
          this.value = res.data
        } catch (err) {
          this.value = err.message
        }
      }
    }
  }
</script>
