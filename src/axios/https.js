import axios from 'axios'
import config from '../config'
import storage from '@/storage.js'
import { Message } from 'element-ui';
axios.defaults.baseURL = config.apiUrl
axios.defaults.headers = {
  'Content-Type': 'application/json'
}
axios.interceptors
  .request
  .use(config => {
    config.headers['access-token'] = storage.getString('accessToken') || ''
    return config
  })

axios.interceptors
  .response
  .use(response => {
    if (response.headers['content-disposition']) {
      return response
    } else {
      return response.data
    }
  }, error => {
    // 其他设备登录
    if (error.response && error.response.status === 401) {
      Message(error.response.data.message);
      localStorage.removeItem('accessToken')
      window.location.reload()
    }
  })

export default {
  get(url, data) {
    return axios({
      method: 'get',
      url,
      params: data
    })
  },
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data: data
    })
  }
}
