/* eslint-disable no-unused-vars */
/*
 * @Autor: yqy
 * @Date: 2022-08-03 19:12:26
 * @LastEditTime: 2022-08-05 17:30:21
 */
import router, { createRouter, mainRouter, addRouter } from './router'
import NProgress from 'nprogress' // Progress 进度条
import { getUserInfo } from '@/utils/storage' // 验权
import { authorityRouting } from '@/utils'



const whiteList = ['/login', '/register'] // 不重定向白名单
    // 路由全局拦截
router.beforeEach(async(to, from, next) => {
    if (getUserInfo()) { // 判断是否有用户信息
        NProgress.start() // 开启Progress
        document.title = 'vue-admin-template ' + to.meta.title;
        router.matcher = createRouter().matcher;
        // 处理用户权限的路由表
        let newAddRouters = authorityRouting(mainRouter, addRouter);
        console.log(newAddRouters);
        const routes = newAddRouters;
        await router.addRoute(routes);
        next({ path: to.path || '/' })
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login') // 否则全部重定向到登录页
            NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
    }
})


router.afterEach(() => {
    NProgress.done() // 结束Progress
})