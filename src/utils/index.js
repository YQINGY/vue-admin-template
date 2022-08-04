/*
 * @Autor: yqy
 * @Date: 2022-08-03 23:14:56
 * @LastEditTime: 2022-08-04 17:06:18
 */
// 处理权限路由
export function authorityRouting(addRouter) {
    let originalRouter = []
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