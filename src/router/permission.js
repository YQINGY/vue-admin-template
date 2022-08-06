/* eslint-disable no-unused-vars */
/*
 * @Autor: yqy
 * @Date: 2022-08-03 19:12:26
 * @LastEditTime: 2022-08-06 12:23:30
 */
import router, { createRouter, mainRouter, addRouter } from '@/router'
import NProgress from 'nprogress' // Progress 进度条
import { getUserInfo, setAsideMenu } from '@/utils/storage' // 验权
import { authorityRouting, temporaryRoutingData } from '@/utils'


// 不重定向白名单
const whiteList = ['/login', 'register', '404'];
// 路由全局拦截
router.beforeEach((to, from, next) => {
    NProgress.start()
    document.title = 'vue-admin-template ' + to.meta.title;
    router.matcher = createRouter().matcher;
    if (getUserInfo()) { // 判断是否有用户信息
        // 缓存侧边栏
        setAsideMenu(temporaryRoutingData(addRouter, getUserInfo().root));
        // 处理用户权限的路由表
        if (router.options.routes.length <= 3) {
            let newAddRouters = authorityRouting(mainRouter, addRouter, getUserInfo().root);
            router.options.routes.push(newAddRouters);
            router.addRoute(newAddRouters);
            next({...to, replace: true });
        } else next();
    } else {
        // 在免登录白名单，直接进入
        if (whiteList.indexOf(to.path) !== -1) {
            next();
            return false;
        } else {
            // 否则全部重定向到登录页
            next('/login');
        }
    }
})


router.afterEach(() => {
    NProgress.done(); // 结束Progress
})