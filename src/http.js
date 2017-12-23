import axios from 'axios'

// API base url
const API_URL = process.env.API_URL

console.log('API url:', API_URL)

export default axios.create({
  baseURL: API_URL
})
