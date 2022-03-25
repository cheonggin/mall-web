import http from './http'

import type{ IDataType } from './types'

export function getHomeData () {
  return http.get<IDataType>({ url: '/page/home' })
}

export function getCategoryList () {
  return http.get<IDataType>({ url: '/page/category' })
}

export function getSubCategoryList (id:number) {
  return http.get<IDataType>({ url: `/page/category/${id}` })
}
