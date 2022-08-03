<!--
 * @Autor: yqy
 * @Date: 2022-08-02 08:58:59
 * @LastEditTime: 2022-08-03 22:55:19
-->
<template>
  <el-aside width="auto">
    <div class="logo-name">
      <p v-if="$store.state.logoShow"><i class="el-icon-monitor" /></p>
      <p v-else><i class="el-icon-monitor" /> 后台管理系统</p>
    </div>
    <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical"
      background-color="#03152A"
      text-color="rgba(255,255,255,.7)"
      :collapse="$store.state.isCollapse"
      @select="selectmenu"
      :collapse-transition="true"
    >
      <template v-for="(item, i) in addRouter">
        <el-submenu :index="String(i)">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <el-menu-item-group v-for="(citem, k) in item.children" :key="k">
            <el-menu-item :index="citem.path">
              <i :class="citem.icon" />
              {{ citem.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "layoutAside",
  data() {
    return {
      addRouter: [
        {
          icon: "el-icon-platform-eleme", // 图标样式class
          title: "主页",
          component: "",
          children: [
            {
              path: "/",
              icon: "el-icon-eleme", // 图标样式class
              name: "图标ICON",
              component: "",
              children: [],
            },
          ],
        },
        {
          icon: "el-icon-tickets", // 图标样式class
          title: "推文管理",
          children: [
            {
              path: "/tweet",
              icon: "el-icon-edit-outline", // 图标样式class
              name: "发表推文",
              component: "",
              children: [],
            },
            {
              path: "/carousel",
              icon: "el-icon-edit-outline", // 图标样式class
              name: "轮播广告",
              component: "",
              children: [],
            },
          ],
        },
      ],
    };
  },
  watch: {
    // 监听浏览器直接输入路由，将此路由添加到tabnavBox
    "$route.path": function (val) {
      this.selectmenu(val);
    },
  },
  methods: {
    selectmenu(key) {
      console.log(key);
      // 如果不使用 elemenUI 菜单的 vue-router 的模式将用以下方式进行页面跳转 el-menu的router设置为false
      // this.$router.push(indexpath.join("/"))
      // let router = this.$store.getters.routers;
      // let name = "";
      // let navTitle = function (path, routerARR) {
      //   for (let i = 0; i < routerARR.length; i++) {
      //     if (routerARR[i].children.length > 0 || routerARR[i].path === path) {
      //       if (
      //         routerARR[i].path === path &&
      //         routerARR[i].children.length < 1
      //       ) {
      //         name = routerARR[i].name;
      //         break;
      //       }
      //       navTitle(path, routerARR[i].children);
      //     }
      //   }
      //   return name;
      // };
      // this.$store.dispatch("addTab", {
      //   title: navTitle(key, router),
      //   path: key,
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-name {
  width: auto;
  color: #fff;
  font-size: 15px;
  .el-icon-monitor {
    font-size: 22px;
    font-weight: bold;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  overflow: hidden;
}
.el-menu {
  border: 0;
}
::v-deep .el-submenu__title {
  text-align: left;
}

.router-link-active {
  color: #1c8cff;
}
a {
  font-weight: 400;
  color: #999;
  text-decoration: none;
}
a:active {
  color: red; /*已访问的链接颜色*/
}
</style>
