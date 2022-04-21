import { IGoodsList } from '@/service/types'

export interface ICartList {
  id: number
  product_id: number
  count: number
  checked: boolean
  product: IGoodsList
}

export interface CartState {
  cartList: ICartList[]
}

export interface CreateCartDto {
  count: number
  product_id: number
}

export interface UpdateCartDto {
  count?: number
  checked?: boolean
}
