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

export interface IKeywordList {
  id: number
  keyword: string
}

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
