/*
 * @Autor: yqy
 * @Date: 2022-08-03 23:14:56
 * @LastEditTime: 2022-08-03 23:18:49
 */
// 处理权限路由
export function authorityRouting(originalRouter, addRouter) {
    addRouter.forEach(e => {
        if (e.root) {
            originalRouter.push(...e.children)
        }
    });
    return originalRouter;
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