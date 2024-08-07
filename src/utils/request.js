import axios from "axios"

export const BASE_URL = 'https://linkworldbio-api.linkworldbio.workers.dev'
const request = axios.create({
  baseURL: BASE_URL
})


request.interceptors.response.use(config => {
  return config.data
})


export default request
