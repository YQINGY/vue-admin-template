/*
 * @Autor: yqy
 * @Date: 2022-08-01 16:58:19
 * @LastEditTime: 2022-08-01 17:17:27
 */
import Vue from 'vue'
import ElementUI from "element-ui"
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import NProgress from "nprogress"

import "nprogress/nprogress.css"
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false
Vue.use(ElementUI)

// NProgress.inc(0.2)
// NProgress.configure({ easing: "ease", speed: 600, showSpinner: false })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')