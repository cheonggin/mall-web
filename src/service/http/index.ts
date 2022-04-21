import router from '@/router'
import { localCache } from '@/utils/cache'
import { Toast } from 'vant'
import Http from './src'
import { baseURL, timeout } from './src/config'

const http = new Http({
  baseURL,
  timeout,
  interceptors: {
    requestOnFulfilled: config => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }

      return config
    },
    responseOnRejected: error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            Toast.fail(error.response.data.msg)
            router.push('/login')
            break
          default:
            Toast.fail(error.response.data.msg)
        }
      }
    }
  }
})

export default http
