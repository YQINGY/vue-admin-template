<!--
 * @Autor: yqy
 * @Date: 2022-08-01 19:24:39
 * @LastEditTime: 2022-08-04 09:08:36
-->
<template>
  <div class="home-vue">
    <el-container>
      <!-- 侧边栏 -->
      <layout-Aside></layout-Aside>
      <el-container class="container">
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
  width: 100%;
  height: 100%;
  color: #666;
}
::v-deep .el-container{
  height: 100%;
}
::v-deep .el-header {
  width: 100%;
  color: #333;
  padding: 0 10px;
  background-color: #f2f2f2;
}
::v-deep .el-aside {
  position: relative;
  height: 100%;
  overflow: auto;
  transition: width 0.3s;
  background-color: #03152a;
}
::v-deep .el-main {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow: auto;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.container {
  display: flex;
  flex-direction: column;
}
</style>
