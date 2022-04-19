import axios from 'axios'

import type { AxiosInstance, AxiosError } from 'axios'

import type { HttpConfig, HttpInterceptors } from './type'

class Http {
  instance: AxiosInstance
  interceptors?: HttpInterceptors

  constructor (config: HttpConfig) {
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors

    // 单独实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestOnFulfilled,
      this.interceptors?.requestOnRejected
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseOnFulfilled,
      this.interceptors?.responseOnRejected
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      config => config,
      (err: AxiosError) => Promise.reject(err)
    )

    this.instance.interceptors.response.use(
      res => res.data,
      (err: AxiosError) => Promise.reject(err)
    )
  }

  request<T = any> (config: HttpConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestOnFulfilled) {
        config = config.interceptors.requestOnFulfilled(config)
      }

      this.instance
        .request<any, T>(config)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  get<T = any> (config: HttpConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any> (config: HttpConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  patch<T = any> (config: HttpConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  delete<T = any> (config: HttpConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default Http
