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

//数组去重
export function unique(arr) {
    let map = new Map();
    let array = new Array(); // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) { // 如果有该key值
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false); // 如果没有该key值
            array.push(arr[i]);
        }
    }
    return array;
}