/*
 * @Autor: yqy
 * @Date: 2022-07-25 09:43:48
 * @LastEditTime: 2022-08-06 03:12:34
 */
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import NProgress from "nprogress"
import { Message } from "element-ui"
import { getUserInfo, removeUserInfo, removeHaderTabs, removeAsideMenu } from '@/utils/storage'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    withCredentials: true, //请求携带cookies
    timeout: 5000
})

service.interceptors.request.use(config => {
    NProgress.start()
    if (getUserInfo()) {
        config.headers.Authorization = getUserInfo().username + '&' + getUserInfo().token;
    }
    return config
}, error => {
    return Promise.error(error);
})

service.interceptors.response.use(response => {
    NProgress.done()
    return new Promise((resolve, reject) => {
        if (response.data.code != 200) {
            switch (response.data.code) {
                case 401:
                    Message({
                        message: '用户凭证已过期，请重新登陆.',
                        type: "warning"
                    })
                    removeUserInfo();
                    removeHaderTabs();
                    removeAsideMenu();
                    setTimeout(() => {
                        router.push({ path: '/login' });
                    }, 2000);
                    break;
                case 404:
                    Message({
                        message: '网络出错,该请求不存在.',
                        type: "warning"
                    })
                    break;
                case 500:
                    Message({
                        message: '服务器内部错误.',
                        type: "warning"
                    })
                    break;
                default:
                    Message({
                        message: response.data.message,
                        type: "warning"
                    })
            }
            reject(response.data);
        } else {
            resolve(response.data);
        }
    })
}, (error) => {
    console.log('error', error.response);
    //断网处理或者请求超时
    if (!error.response) {
        if (error.response.message.includes("timeout")) {
            console.log("超时了");
            Message({
                message: '请求超时，请检查互联网连接.',
                type: "warning"
            })
        } else {
            console.log("断网了");
            Message({
                message: '检查网络是否已连接.',
                type: "warning"
            })
        }
    }
    return Promise.reject(error);
})
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        service.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    console.log(url, params)
    return new Promise((resolve, reject) => {
        service.post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}
