/*
 * @Autor: yqy
 * @Date: 2022-08-01 17:30:39
 * @LastEditTime: 2022-08-05 16:36:29
//  */
let UserKey = 'vue-admin-template'

let storage = window.sessionStorage;

export function getUserInfo() {
    let data = storage.getItem(UserKey);
    if (data != 'undefined') return JSON.parse(data)
    else return data
}

export function setUserInfo(userInfo) {
    return storage.setItem(UserKey, JSON.stringify(userInfo))
}

export function removeUserInfo() {
    return storage.remove(UserKey)
}

export function getHaderTabs() {
    let data = storage.getItem("haderTabs");
    if (data != 'undefined') return JSON.parse(data)
    else return storage.getItem("haderTabs");
}

export function setHaderTabs(haderTabs) {
    return storage.setItem("haderTabs", JSON.stringify(haderTabs))
}

export function removeHaderTabs() {
    return storage.removeItem("haderTabs")
}