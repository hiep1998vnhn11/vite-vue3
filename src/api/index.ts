import request from '../helpers/request'

export function loginApi(payload: { email: string; password: string }) {
  console.log(payload)
  return request({
    url: '/auth/login',
    method: 'post',
    data: payload,
  })
}
