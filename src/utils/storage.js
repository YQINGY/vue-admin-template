/*
 * @Autor: yqy
 * @Date: 2022-08-01 17:30:39
 * @LastEditTime: 2022-08-06 03:03:22
//  */
const UserKey = 'vue-admin-template'
const storage = window.sessionStorage;

export function getUserInfo() {
    const temporaryData = storage.getItem(UserKey);
    if (temporaryData != 'undefined') return JSON.parse(temporaryData)
    else return temporaryData
}

export function getHaderTabs() {
    const temporaryData = storage.getItem("haderTabs");
    if (temporaryData != 'undefined') return JSON.parse(temporaryData)
    else return temporaryData;
}

export function getAsideMenu() {
    const temporaryData = storage.getItem("asideMenu");
    if (temporaryData != 'undefined') return JSON.parse(temporaryData)
    else return temporaryData;
}

export function setUserInfo(userInfo) {
    return storage.setItem(UserKey, JSON.stringify(userInfo))
}

export function setHaderTabs(haderTabs) {
    return storage.setItem("haderTabs", JSON.stringify(haderTabs))
}

export function setAsideMenu(asideMenu) {
    return storage.setItem("asideMenu", JSON.stringify(asideMenu))
}


export function removeUserInfo() {
    return storage.removeItem(UserKey)
}

export function removeHaderTabs() {
    return storage.removeItem("haderTabs")
}

export function removeAsideMenu() {
    return storage.removeItem("asideMenu")
}