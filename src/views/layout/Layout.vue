<!--
 * @Autor: yqy
 * @Date: 2022-08-01 19:24:39
 * @LastEditTime: 2022-08-02 16:01:40
-->
<template>
  <div class="home-vue">
    <el-container>
      <!-- 侧边栏 -->
      <layout-Aside></layout-Aside>
      <el-container>
        <!-- header 头部 -->
        <layout-Header></layout-Header>
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
import layoutAside from "./Aside.vue";
import layoutHeader from "./Header.vue";
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  components: { layoutAside, layoutHeader },
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
  position: relative;
  width: 100%;
  height: 100vh;
  color: #666;
}
::v-deep .el-header {
  width: 100%;
  color: #333;
  padding: 0 10px;
  background-color: #f2f2f2;
}
::v-deep .el-aside {
  height: 100vh;
  overflow: auto;
  transition: width 0.3s;
  background-color: #03152a;
}
::v-deep .el-main {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #48515d;
}
</style>
