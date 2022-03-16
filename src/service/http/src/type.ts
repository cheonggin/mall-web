import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HttpInterceptors {
  requestOnFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestOnRejected?: (error: any) => any
  responseOnFulfilled?: (res: AxiosResponse) => AxiosResponse
  responseOnRejected?: (error: any) => any
}

export interface HttpConfig extends AxiosRequestConfig {
  interceptors?: HttpInterceptors
  showLoading?: boolean
}
