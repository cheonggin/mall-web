import http from './http'

import type{ IDataType } from './types'

export function getHomeData () {
  return http.get<IDataType>({ url: '/page/home' })
}
