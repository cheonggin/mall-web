import { localCache } from '@/utils/cache'
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
    }
  }
})

export default http
