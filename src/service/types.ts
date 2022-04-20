interface IMsg {
  error: string
  message: string
  statusCode: number
}
export interface IDataType {
  code: number
  data: any
  msg: string | IMsg
}

export interface IQueryInfo {
  query: string
  offset: number
  limit: number
}

// home
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

// category
export interface ICategory extends IHomeSwipe {
  name: string
}

interface ICategoryProduct extends ICategory {
  id: number
  category_id: number
  is_multi_price: boolean
  labels: any[] | null
  market_price: string
  price: string
  product_desc: string
  product_desc_origin: string
  product_id: number
}

interface ISubCategory extends ICategory {
  category_products: ICategoryProduct[]
}

export interface ICurrentCategory {
  category: ICategory
  subCategory: ISubCategory[]
}

// search,搜索关键词
export interface IKeywordList {
  id: number
  keyword: string
}

// goods
interface IGoodsClass {
  bottom_title: string
  icon: string
  name: string
  search_title: string
  top_title: string
  value: string
}

export interface IGoodsList {
  id: number
  name: string
  desc: string
  image: string
  price: string
  satisfy_per: string
  comments_total: string
  class_parameters: IGoodsClass[]
  activity_label: string[]
}

// goods detail
export interface IDetailSwiper {
  id: number
  img_url: string
}

interface IClassParameters {
  bottom_title: string
  icon: string
  is_page_show: boolean
  name: string
  top_title: string
  value: string
}

export interface IGoodsInfoData {
  id: number
  name: string
  price: string
  product_desc: string
  class_parameters: IClassParameters[]
  sell_point_desc: string[]
}

interface IGoodsInfoCommentsList {
  add_time: string
  comment_content: string
  comment_images: string[]
  user_avatar: string
  user_name: string
}

export interface IGoodsInfoComments {
  id: number
  satisfy_per: string
  list: IGoodsInfoCommentsList[]
  comment_tags: string[]
}

export interface IGoodsInfoTabList {
  id: number
  tab_name: string
  page_info: string[]
}
