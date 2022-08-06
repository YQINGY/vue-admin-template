/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/*
 * @Autor: yqy
 * @Date: 2022-08-01 16:58:19
 * @LastEditTime: 2022-08-06 13:23:58
 */
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import { deduplication } from '@/utils'
import { getUserInfo, getHaderTabs, getAsideMenu, setHaderTabs } from '@/utils/storage'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: getUserInfo(),
        isCollapse: false,
        logoShow: false,
        asideMenu: getAsideMenu(),
        haderTabs: getHaderTabs() || [{
            path: "/",
            checked: true,
            meta: { title: "主页" },
        }]

    },
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
        },
        SET_COLLAPSE(state, type) {
            if (type == undefined) {
                state.isCollapse = !state.isCollapse
                if (state.logoShow) {
                    setTimeout(function() {
                        state.logoShow = false
                    }, 300)
                } else {
                    state.logoShow = true
                }
            } else {
                state.isCollapse = type
                state.logoShow = type
            }
        },
        SET_HADERTABS: (state, data) => {
            let List = state.haderTabs;
            List.push(data);
            let newList = deduplication(List);
            newList.forEach(item => {
                if (item.path != data.path) item.checked = false;
                else item.checked = true;
            });
            setHaderTabs(newList)
            state.haderTabs = newList;
        },
        DEL_TBAS: (state, param) => {
            let List = state.haderTabs;
            List.splice(param.index, 1);
            if (param.item.checked) {
                router.push({ path: List[List.length - 1].path });
                List[List.length - 1].checked = true;
            }
            setHaderTabs(List);
            state.haderTabs = List;
        },
        UPDATA_TABSTYPE: (state, param) => {
            let List = state.haderTabs;
            for (let index = 0; index < List.length; index++) {
                if (List[index].meta.title == param.meta.title) {
                    List[index].checked = true
                } else {
                    List[index].checked = false
                }
            }
            setHaderTabs(List);
            state.haderTabs = List
        }
    },
    actions: {
        asyncDeleTbas(context, param) {
            setTimeout(() => { context.commit('DEL_TBAS', param) }, 300)
        }
    },
    modules: {}
})

export default store