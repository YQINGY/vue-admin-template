/*
 * @Autor: yqy
 * @Date: 2022-07-25 09:43:48
 * @LastEditTime: 2022-08-06 12:07:40
 */
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    lintOnSave: false,
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    outputDir: process.env.NODE_ENV == "production" ? 'prod' : 'test',
    devServer: {
        // proxy: {
        //     '/api': {
        //         // 需要代理的后台接口域名
        //         target: "http://localhost:8000",
        //         changeOrigin: true, //是否跨域
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    configureWebpack: { // 绝对路径
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    css: {

    },
    chainWebpack: config => {
        // config.plugins.delete("prefetch");
        config.resolve.symlinks(true);
        config.resolve.alias
            .set("@image", resolve("src/assets/img"))
            .set("@css", resolve("src/assets/css"))
            .set("@com", resolve("src/components"))
            .set("@js", resolve("src/common"))
    },
    transpileDependencies: [
        // 指定对第三方组件也进行babel-polyfill处理
    ],
};