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
