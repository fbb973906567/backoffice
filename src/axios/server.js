import Http from './https'
import * as Api from './type'
// 登陆
export const LoginAjax = (options) => {
  return Http.post(Api.LOGIN, options)
}
