/*
 * @Autor: yqy
 * @Date: 2022-08-01 16:58:19
 * @LastEditTime: 2022-08-01 17:34:56
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, setUserInfo, removeUserInfo } from '@/utils/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: getUserInfo() || null,
        isCollapse: false,
        logoShow: false,
    },
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
        SET_COLLAPSE(state, isCollapse) {
            state.isCollapse = !state.isCollapse
            if (state.logoShow) {
                setTimeout(function() {
                    state.logoShow = false
                }, 300)
            } else {
                state.logoShow = true
            }
        }
    },
    actions: {},
    modules: {}
})

export default store