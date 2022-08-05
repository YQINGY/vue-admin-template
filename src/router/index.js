/* eslint-disable no-undef */
/*
 * @Autor: yqy
 * @Date: 2022-08-01 18:49:54
 * @LastEditTime: 2022-08-05 17:54:36
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/Layout"


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
    // 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export const originalRouter = [{
        path: "/",
        redirect: "/index",
        children: []
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () =>
            import ('@/components/login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            title: '注册',
        },
        component: () =>
            import ('@/components/register.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '404',
        },
        component: () =>
            import ('@/components/404.vue')
    }
];
export const mainRouter = [{
    path: "/",
    component: Layout,
    root: true,
    meta: { title: '主页' },
    children: []
}, ]

export const addRouter = [{
        title: '用户管理',
        icon: 'el-icon-eleme"',
        root: true,
        children: [{
            path: '/competence',
            name: 'competence',
            icon: 'el-icon-eleme"',
            meta: { title: '用户权限' },
            component: () =>
                import ('@/views/userinfo/competence.vue')
        }]
    },
    {
        title: '文章管理',
        icon: 'el-icon-tickets',
        root: true,
        children: [{
                path: '/tweet',
                name: 'tweet',
                icon: 'el-icon-tickets',
                meta: { title: '发布推文' },
                component: () =>
                    import ('@/views/article/tweet.vue')
            },
            {
                path: '/carousel',
                name: 'carousel',
                icon: 'el-icon-tickets',
                meta: { title: '轮播广告' },
                component: () =>
                    import ('@/views/article/carousel.vue')
            },
            {
                path: '/msg',
                name: 'msg',
                icon: 'el-icon-tickets',
                meta: { title: '通知消息' },
                component: () =>
                    import ('@/views/index.vue'),
            }
        ]
    }
]

export const createRouter = () => new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: originalRouter
})
const router = createRouter()

export default router