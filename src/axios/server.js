import Http from './https'
import * as Api from './type'
// 登陆
export const LoginAjax = (options) => {
  return Http.post(Api.LOGIN, options)
}
// 单品主档
export const SkuList = (options) => {
  return Http.post(Api.SKU_LIST, options)
}
// 单品销售管理三级分类
export const LevelList = (options) => {
  return Http.post(Api.PRO_LEVEL, options)
}
// 单品销售管理所有站点
export const SiteList = (options) => {
  return Http.post(Api.SITE_LIST, options)
}

// 单品销售管理列表查询
export const SalesList = (options) => {
  return Http.post(Api.SALES_LIST, options)
}
// 单品下架(批量)
export const skuSoldOut = (options) => {
  return Http.post(Api.SOLD_OUT, options)
}

// 单品上架(批量)
export const skuPutAway = (options) => {
  return Http.post(Api.PUT_AWAY, options)
}

// 查看单品销售详情
export const getSkuSalesDetail = (options) => {
  return Http.post(Api.SKUSALES_DETAIL, options)
}
