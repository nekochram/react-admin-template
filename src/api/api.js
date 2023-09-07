import { get, post } from './request'
//登录验证码
export const captchaApi = () => get('/captcha');
//账号密码登录
export const loginApi = params => post('/login_pwd',params)