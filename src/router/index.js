/* eslint-disable no-undef */
/*
 * @Autor: yqy
 * @Date: 2022-08-01 18:49:54
 * @LastEditTime: 2022-08-06 12:51:32
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/layout"

//重定向时报错，用这个不让他报错

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject)
    }
    return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

export const originalRouter = [{
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
export const mainRouter = {
    path: "/",
    component: Layout,
    redirect: '/',
    root: true,
    children: [{
        path: '/',
        name: 'index',
        meta: { title: '主页' },
        component: () =>
            import ('@/views/index.vue'),
    }]
}

export const addRouter = [{
        title: '用户管理',
        icon: 'el-icon-user',
        root: true,
        children: [{
            path: '/competence',
            name: 'competence',
            icon: 'el-icon-user',
            meta: { title: '用户权限' },
            component: () =>
                import ('@/views/userinfo/competence.vue')
        }]
    },
    {
        title: '内容管理',
        icon: 'el-icon-tickets',
        root: false,
        children: [{
                path: '/tweet',
                name: 'tweet',
                icon: 'el-icon-tickets',
                meta: { title: '发布推文' },
                component: () =>
                    import ('@/views/article/tweet.vue')
            },
            {
                path: '/msg',
                name: 'msg',
                icon: 'el-icon-tickets',
                meta: { title: '通知消息' },
                component: () =>
                    import ('@/views/article/msg.vue'),
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