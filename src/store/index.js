/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/*
 * @Autor: yqy
 * @Date: 2022-08-01 16:58:19
 * @LastEditTime: 2022-08-05 00:08:59
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, getHaderTabs, setHaderTabs } from '@/utils/cookies'
import { authorityRouting, dropDownList, unique } from '@/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: getUserInfo(),
        isCollapse: false,
        logoShow: false,
        asideMenu: [],
        haderTabs: [{
            path: "/",
            checked: true,
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
            console.log('----data----', data)
            let List = state.haderTabs
            let result;
            for (let index = 0; index < List.length; index++) {
                if (List[index].path != data.path) {
                    List.push(data)
                    List[index].checked = false
                }
            }
            result = new Set(List)
            state.haderTabs = result
                // List.forEach(e => {
                //     if (data.path == e.path) {
                //         console.log('有重复', e)
                //         e.checked = false
                //     } else {
                //         console.log('没有重复', e)
                //         List.push(data)
                //     }
                // });
                // Array.from(new Set(List))
                // state.haderTabs = Array.from(new Set(List))
                // console.log(state.haderTabs)
        }
    },
    actions: {},
    modules: {}
})

export default store