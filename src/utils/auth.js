/*
 * @Autor: yqy
 * @Date: 2022-08-01 17:30:39
 * @LastEditTime: 2022-08-01 17:30:46
 */
import Cookies from 'js-cookie'

const UserKey = 'vue_userInfo'

export function getUserInfo() {
    return Cookies.get(UserKey)
}

export function setUserInfo(userInfo) {
    return Cookies.set(UserKey, userInfo)
}

export function removeUserInfo() {
    return Cookies.remove(UserKey)
}