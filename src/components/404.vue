<!--
 * @Autor: yqy
 * @Date: 2022-08-02 20:48:11
 * @LastEditTime: 2022-08-02 21:20:47
-->
<template>
  <div>
    <el-empty :image-size="500" description="------ 404 ------">
      <el-button type="primary" :loading="true">
        <router-link to="/index">返回首页 {{ time }} 秒</router-link>
      </el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 5,
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.time--;
      if (this.time == 0) this.$router.go(-1);
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      //如果定时器还在运行 或者直接关闭，不用判断
      clearInterval(this.timer); //关闭
    }
  },
};
</script>

<style scoped>
.router-link-active,
a {
  font-weight: 400;
  color: #fff;
  text-decoration: none;
}
</style>
