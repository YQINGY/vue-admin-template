# vue-admin-template

## Vue 轻量级后台管理系统基础模板

### 相关依赖
* [vue-router](https://router.vuejs.org/zh/)
* [element](https://element.eleme.io/#/zh-CN/component/installation)
* [axios](https://www.kancloud.cn/yunye/axios/234845)
* [vuex](https://vuex.vuejs.org/zh/)

### 项目初始目录
```
  |-- vue-admin-template      // 项目名称
  |-- babel.config.js         // 项目打包配置文件
  |-- package-lock.json       // 记录安装包的具体版本号
  |-- package.json            // 包的类型
  |-- README.md               // 项目功能介绍
  |-- public                  // 项目打包后的目录
  |   |-- favicon.ico
  |   |-- index.html
  |-- src                     // 项目开发目录
      |-- App.vue             // 主入口文件
      |-- main.js             // 主入口文件
      |-- layout              // layout布局
      |-- router              // vue-router文件
         |-- index.js         // 路由表
         |-- permission.js    // 路由守卫封装
      |-- store               // vuex
      |-- assets //静态文件
         |-- image            // 项目图片存放目录
      |-- components          // 组件存放目录
      |-- views               // 视图主目录
      |-- utils               // 封装工具类
         |-- request.js       // 封装axios请求
         |-- storage.js       // 封装浏览器缓存数据
         |-- userinfo
            |-- competence.vue
         |-- article
            |-- tweet.vue
            |-- msg.vue

```
### 功能

#### 侧边栏
* 伸展/收缩
* 页面宽度过小自动收缩
* 多级菜单（可以根据element-ui组件代码示例自行添加遍历）

#### 用户相关
* 消息通知
* 用户头像
* 基本资料

#### 动态菜单栏
* 根据数据动态生成菜单
* 根据`src/router/index`路由表里的权限root的值与用户登录root的值 全都当前用户的菜单栏数据

#### 面包屑
* 展示当前页面的路径和之前访问过的页面

#### 权限控制
* 如果在未登陆的情况下访问指定页面 将会重定向到登陆页


#### 页面标题 `document.title`
在 `src/router/permission` 下可设置默认的 `title`，在每个路由配置项上可设置对应的 `title`

#### 其它
* 利用`axios`拦截器 实现了`ajax`请求前展示`loading` 请求结束关闭`loading`

### 注意
* clone源代码 可以自行更改

功能都不太丰富了 写了这么一个最基础的 只写框架搭建必要功能的模板，提供大家学习与搭建后台管理模板

UI库使用的是`element` 有大量的组件可用 

### 使用
#### 下载
```
git clone https://github.com/YQINGY/vue-admin-template.git

cd vue-admin-template

npm install
```

#### 开发
```
npm run serve
```

#### 打包
````
npm run build
````

#### 最后
````
由于水平和时间有限，所以难免会有错误，欢迎lssues提出！

如果喜欢一定要点一下右上角star呀 ！
````

