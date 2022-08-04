/*
 * @Autor: yqy
 * @Date: 2022-08-01 17:30:39
 * @LastEditTime: 2022-08-04 17:09:56
 */
import Cookies from 'js-cookie'

const UserKey = 'vue-admin-template'

export function getUserInfo() {
    return Cookies.get(UserKey)
}

export function setUserInfo(userInfo) {
    return Cookies.set(UserKey, JSON.stringify(userInfo))
}

export function removeUserInfo() {
    return Cookies.remove(UserKey)
}

export function getHaderTabs() {
    return Cookies.get("haderTabs")
}

export function setHaderTabs(haderTabs) {
    return Cookies.set("haderTabs", JSON.stringify(haderTabs))
}

export function removeHaderTabs() {
    return Cookies.remove("haderTabs")
}