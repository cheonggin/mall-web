import { IGoodsList } from '@/service/types'

export interface IOrderGoods {
  count: number
  product: IGoodsList
}

export interface IOrderDto {
  count: number
  product_id: number
}

export interface CreateOrderDto {
  address_id: number
  list: IOrderDto[]
}

interface IList {
  count: number
  id: number
  product: IGoodsList
}

interface IOrderList {
  create_at: string
  id: number
  order_number: string
  pay_status: number
  goodsList: IList[]
}

export interface OrderState {
  orderGoodsList: IOrderGoods[]
  order_number: string
  orderList: IOrderList[]
}
