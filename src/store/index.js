/* eslint-disable no-unused-vars */
/*
 * @Autor: yqy
 * @Date: 2022-08-01 16:58:19
 * @LastEditTime: 2022-08-04 18:04:18
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, getHaderTabs, setHaderTabs } from '@/utils/cookies'
import { authorityRouting, dropDownList } from '@/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: getUserInfo(),
        isCollapse: false,
        logoShow: false,
        asideMenu: [],
        haderTabs: getHaderTabs() || [{
            path: "/",
            meta: { title: "主页" },
        }]

    },
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
            if (state.logoShow) {
                setTimeout(function() {
                    state.logoShow = false
                }, 300)
            } else {
                state.logoShow = true
            }
        },
        SET_HADERTABS: (state, data) => {
            state.haderTabs.push(data)
            setHaderTabs(state.haderTabs)
        }
    },
    actions: {},
    modules: {}
})

export default store