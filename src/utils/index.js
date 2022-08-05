/*
 * @Autor: yqy
 * @Date: 2022-08-03 23:14:56
 * @LastEditTime: 2022-08-05 17:18:38
 */
// 处理权限路由

export function authorityRouting(mainRouter, addRouter) {
    const originalRouter = []
    addRouter.forEach(e => {
        if (e.root) {
            originalRouter.push(...e.children)
        }
    });
    mainRouter[0].children = originalRouter
    mainRouter.push({ path: '*', redirect: '/404' }, )
    return mainRouter;
}

// 处理下拉列表路由
export function dropDownList(routerList) {
    const newDropDownList = new Array;
    routerList.forEach(e => {
        if (e.root) {
            newDropDownList.push(...e)
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