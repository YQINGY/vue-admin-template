<!--
 * @Autor: yqy
 * @Date: 2022-08-01 19:24:39
 * @LastEditTime: 2022-08-02 00:27:03
-->
<template>
  <div class="home-vue">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :style="{ width: isCollapse ? '63px' : '223px' }">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
         <el-menu-item index="0">
            <i class="el-icon-setting"></i>
            <span slot="title">VUE</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- header 头部 -->
        <el-header>
          <i
            :class="[isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
            @click="isCollapse = !isCollapse"
          ></i>
        </el-header>
        <!-- 内容主体 -->
        <el-main>
          <transition name="main" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.home-vue {
  width: 100%;
  height: 100vh;
  color: #666;
}
.el-header {
  width: 100%;
  color: #333;
  background-color: #b3c0d1;
}

::v-deep .el-aside {
  height: 100vh;
  overflow: auto;
  transition: width 0.3s;
  background: #20222a;
}
::v-deep .el-main {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #48515d;
}
</style>
