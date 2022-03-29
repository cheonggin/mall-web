export interface IDataType {
  code: number
  data: any
  msg: string
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

// search-list,产品列表
interface IActiveLabel {
  w: number
  h: number
  img_url: string
  img_url_webp: string
  type: string
  type_desc: string
}

interface IClassParametersList {
  bottom_title: string
  icon: string
  is_page_show: boolean
  log_code: string
  name: string
  parameter_id: number
  search_title: string
  top_title: string
  value: string
}

interface IClassParameters {
  class_id: number
  class_name: string
  class_sort: number
  list: IClassParametersList[]
}

export interface IGoodsList {
  id: number
  product_id: number
  name: string
  desc: string
  image: string
  price: string
  market_price: string
  is_multi_price: boolean
  satisfy_per: string
  comments_total: string
  activity_label: IActiveLabel[]
  class_parameters: IClassParameters
}
