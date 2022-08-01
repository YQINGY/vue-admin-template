/*
 * @Autor: yqy
 * @Date: 2022-07-23 16:24:07
 * @LastEditTime: 2022-07-31 20:23:54
 */
import request from '@/utils/request'


export function userVerify(params) {
    return request.get('/user/verify', params)
}

export function userLogin(params) {
    return request.post('/user/login', params)
}

export function updatePwd(params) {
    return request.post('/user/updatePwd', params)
}

export function registerAccount(params) {
    return request.post('/user/register', params)
}

export function updateFile(params) {
    return request.post('/user/uploadFile', params)
}
export function queryAll(params) {
    return request.get('/advertising/queryAll', params)
}

export function add(params) {
    return request.post('/advertising/add', params)
}

export function show(params) {
    return request.get('/billboard/show', params)
}