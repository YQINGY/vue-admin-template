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


export const constantRoutes = [{
        path: "/",
        name: 'index',
        component: () =>
            import ('../views/index.vue'),
        meta: {
            title: '主页',
        },
        children: []
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/components/login.vue'),
        meta: {
            title: '登录',
        },
        hidden: true,
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('@/components/register.vue'),
        hidden: true,
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('@/components/404.vue'),
        hidden: true,
    },
];


export const asyncRoutes = [{
        path: "/",
        name: 'index',
        component: Layout,
        root: true,
        children: [{
            path: '/competence',
            name: 'competence',
            meta: { title: '用户权限' },
            component: () =>
                import ('../views/userinfo/competence.vue')
        }]
    },
    {
        path: "/",
        name: 'index',
        component: Layout,
        root: true,
        children: [{
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
                    import ('../views/index.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes
})

export default router