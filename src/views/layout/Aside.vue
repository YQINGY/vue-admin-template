<!--
 * @Autor: yqy
 * @Date: 2022-08-02 08:58:59
 * @LastEditTime: 2022-08-02 15:14:05
-->
<template>
  <el-aside width="auto">
    <div class="logo-name">
      <p v-if="$store.state.logoShow"><i class="el-icon-platform-eleme"></i></p>
      <p v-else>Vue+Element-UI</p>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical"
      background-color="#03152A"
      text-color="rgba(255,255,255,.7)"
      :collapse="$store.state.isCollapse"
      @select="selectmenu"
      :collapse-transition="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">测试1</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-s-promotion"></i>选项1</el-menu-item
          >
          <el-menu-item index="1-2">
            <i class="el-icon-s-promotion"></i>选项2</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-marketing"></i>
          <span slot="title">测试2</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-s-promotion"></i>选项3</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "layoutAside",
  data() {
    return {};
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

<style scoped>
.logo-name {
  width: auto;
  color: #fff;
  font-weight: bold;
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
</style>
