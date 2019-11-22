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

