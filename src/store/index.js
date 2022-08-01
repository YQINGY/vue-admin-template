/*
 * @Autor: yqy
 * @Date: 2022-08-01 16:58:19
 * @LastEditTime: 2022-08-01 17:34:56
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, setUserInfo, removeUserInfo } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: getUserInfo()
    },
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
    },
    actions: {},
    modules: {}
})