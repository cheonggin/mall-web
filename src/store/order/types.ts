import { IGoodsList } from '@/service/types'

export interface IOrderGoods {
  count: number
  product: IGoodsList
}

export interface OrderState {
  orderGoodsList: IOrderGoods[]
}
