import axios from 'axios'

export default {
  // es6 way
  // fetchData () {
  //   return axios.get('http://example.com/api')
  // }

  // es7 way
  async fetchData () {
    try {
      const res = await axios.get('http://example.com/api')
      return res
    } catch (err) {
      throw new Error('hello')
    }
  }
}
