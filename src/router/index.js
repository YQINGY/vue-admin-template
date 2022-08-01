/*
 * @Autor: yqy
 * @Date: 2022-08-01 18:49:54
 * @LastEditTime: 2022-08-01 19:02:35
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/Layout"

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: 'home',
        component: Layout,
        alone: true,
        children: [{
            path: "/home",
            iconCls: "fa fa-dashboard", // 图标样式class
            name: "主页",
            component: () =>
                import ('../views/home.vue'),
            children: []
        }]
    },
    {
        path: '/competence',
        name: 'competence',
        meta: { title: '用户权限' },
        component: () =>
            import ('../views/competence.vue')
    },
    {
        path: '/tweet',
        name: 'tweet',
        meta: { title: '发布推文' },
        component: () =>
            import ('../views/tweet.vue')
    },
    {
        path: '/carousel',
        name: 'carousel',
        meta: { title: '轮播广告' },
        component: () =>
            import ('../views/carousel.vue')
    },
    {
        path: '/msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () =>
            import ('../views/msg.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router