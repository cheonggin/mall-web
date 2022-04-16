import http from './http'

import { IDataType, IQueryInfo } from './types'
import { LoginDto } from '@/store/login/types'

export function getHomeData () {
  return http.get<IDataType>({ url: '/page/home' })
}

export function getCategoryList () {
  return http.get<IDataType>({ url: '/page/category' })
}

export function getSubCategoryList (id: number) {
  return http.get<IDataType>({ url: `/page/category/${id}` })
}

export function getKeywordList () {
  return http.get<IDataType>({ url: '/page/keyword' })
}

export function getProductList (queryInfo: IQueryInfo) {
  return http.get<IDataType>({ url: '/page/goods', params: queryInfo })
}

export function getGoodsInfo (id: number) {
  return http.get<IDataType>({ url: `/page/goods/${id}` })
}

export function register (data: LoginDto) {
  return http.post<IDataType>({ url: '/register', data })
}

export function login (data:LoginDto) {
  return http.post<IDataType>({ url: '/login', data })
}
