import { IHomeSwipe } from '@/store/home/types'

export interface ICategory extends IHomeSwipe {
  name: string
}

export interface ICategoryProduct extends ICategory{
  id:number
  category_id:number
  is_multi_price:boolean
  labels:any[] | null
  market_price:string
  price:string
  product_desc:string
  product_desc_origin:string
  product_id:number
}

export interface ISubCategory extends ICategory{
  category_products:ICategoryProduct[]
}

export interface ICurrentCategory {
  category: ICategory
  subCategory: ISubCategory[]
}

export interface ICategoryState {
  categoryList: ICategory[]
  currentSubList: ICurrentCategory
}
