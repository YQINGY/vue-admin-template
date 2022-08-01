/*
 * @Autor: yqy
 * @Date: 2022-07-23 16:24:07
 * @LastEditTime: 2022-07-24 17:25:18
 */
import { resetRouter } from '@/router'

export function resetTokenAndClearUser() {
    // 退出登陆 清除用户资料
    localStorage.setItem('userInfo', '')
        // 重设路由
    resetRouter()
}

export const defaultDocumentTitle = 'vue-template'
export function getDocumentTitle(pageTitle) {
    if (pageTitle) return `${defaultDocumentTitle} - ${pageTitle}`
    return `${defaultDocumentTitle}`
}