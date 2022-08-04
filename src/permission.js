/* eslint-disable no-unused-vars */
/*
 * @Autor: yqy
 * @Date: 2022-08-03 19:12:26
 * @LastEditTime: 2022-08-04 17:46:05
 */
import router, { createRouter, originalRouter, addRouter } from './router'
// import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import { getUserInfo } from '@/utils/cookies' // 验权
import { authorityRouting } from '@/utils/index'



// console.log(router.options.routes)


// 路由全局拦截
router.beforeEach(async(to, from, next) => {
    // NProgress.start() // 开启Progress
    document.title = 'vue-admin-template ' + to.meta.title;
    router.matcher = createRouter().matcher;
    // 处理用户权限的路由表
    // router.options.routes[0].children = authorityRouting(addRouter)
    // router.addRoutes(router.options.routes)
    // next({ path: to.path })
    next()
})



// register global progress.
// const whiteList = ['/login', '/register'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//     NProgress.start() // 开启Progress
//     if (getUserInfo()) { // 判断是否有用户信息
//         if (to.path === '/login') {
//             next({ path: '/' })
//             NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
//         } else {
//             router.addRoutes(asyncRoutes); // 动态添加可访问路由表
//             next({...to, replace: true })

//         }
//     } else {
//         if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//             next()
//         } else {
//             next('/login') // 否则全部重定向到登录页
//             NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
//         }
//     }
// })

router.afterEach(() => {
    // NProgress.done() // 结束Progress
})