export interface IHomeTilteImg {
  path: string
  img_url: string
}

export interface IHomeSwipe extends IHomeTilteImg {
  id: number
  create_at: string
  update_at: string
}

export interface IHomeProduct extends IHomeSwipe {
  product_id: number
  market_price: string
  product_brief: string
  product_name: string
  product_org_price: string
  product_price: string
  show_price: string
}

export interface IHomeRecommend {
  id: number
  products: IHomeProduct[]
  titleImgs: IHomeTilteImg[]
  create_at: string
  update_at: string
}

export interface IHomeState {
  bannerList: IHomeSwipe[]
  shortcutList: IHomeSwipe[]
  recommendList: IHomeRecommend[]
}
