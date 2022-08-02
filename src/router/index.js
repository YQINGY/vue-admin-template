/*
 * @Autor: yqy
 * @Date: 2022-08-01 18:49:54
 * @LastEditTime: 2022-08-01 19:02:35
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/Layout"

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)



const routes = [{
        path: "/",
        name: 'index',
        component: Layout,
        alone: true,
        children: [{
            path: "/",
            iconCls: "fa fa-dashboard", // 图标样式class
            name: "主页",
            component: () =>
                import ('../views/index.vue'),
            children: []
        }]
    },
    {
        path: '/competence',
        name: 'competence',
        meta: { title: '用户权限' },
        component: () =>
            import ('../views/userinfo/competence.vue')
    },
    {
        path: '/tweet',
        name: 'tweet',
        meta: { title: '发布推文' },
        component: () =>
            import ('../views/article/tweet.vue')
    },
    {
        path: '/carousel',
        name: 'carousel',
        meta: { title: '轮播广告' },
        component: () =>
            import ('../views/article/carousel.vue')
    },
    {
        path: '/msg',
        name: 'msg',
        meta: { title: '通知消息' },
        component: () =>
            import ('../views/article/msg.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '系统登录' },
        component: () =>
            import ('../components/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: { title: '注册账号' },
        component: () =>
            import ('../components/register.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () =>
            import ('../components/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router