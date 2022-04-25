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

export interface OrderState {
  orderGoodsList: IOrderGoods[]
  order_number: string
}
