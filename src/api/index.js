/*
 * @Autor: yqy
 * @Date: 2022-07-23 16:24:07
 * @LastEditTime: 2022-08-06 12:23:58
 */
import request from '@/utils/request'


export function userVerify(params) {
    return request.get('/user/verify', params)
}

export function userLogin(params) {
    return request.post('/user/login', params)
}