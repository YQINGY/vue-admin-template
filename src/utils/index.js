/*
 * @Autor: yqy
 * @Date: 2022-08-03 23:14:56
 * @LastEditTime: 2022-08-06 03:09:00
 */
// 处理权限路由
export function authorityRouting(mainRouter, addRouter, root) {
    const newRouter = mainRouter;
    const xxx = { path: '*', redirect: '/404' };
    addRouter.forEach(e => {
        if (root) {
            mainRouter.children.push(...e.children);
        } else {
            if (!e.root) newRouter.children.push(...e.children);
        }
    });
    if (root) {
        mainRouter.children.push(xxx);
        return mainRouter;
    } else {
        newRouter.children.push(xxx);
        return newRouter;
    }
}

// 校验处理用户路由的权限存放浏览器零时缓存
export function temporaryRoutingData(addRouter, root) {
    const adminTabs = [];
    const ordinaryTabs = [];
    for (let i = 0; i < addRouter.length; i++) {
        if (root) {
            adminTabs.push(addRouter[i]);
        } else {
            if (!addRouter[i].root) ordinaryTabs.push(addRouter[i]);
        }
    }
    if (root) return adminTabs;
    else return ordinaryTabs;
}

// 处理tabs下拉列表路由
export function dropDownList(routerList) {
    const newDropDownList = new Array;
    routerList.forEach(e => {
        if (e.root) {
            newDropDownList.push(...e);
        }
    });
    return newDropDownList;
}

//数组去重
export function deduplication(Array) {
    let newArr = [];
    let arrpath = [];
    for (var item of Array) {
        if (arrpath.indexOf(item['path']) == -1) {
            arrpath.push(item['path']);
            newArr.push(item);
        }
    }
    return newArr;
}