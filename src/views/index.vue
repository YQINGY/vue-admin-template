<!--
 * @Autor: yqy
 * @Date: 2022-07-23 16:24:07
 * @LastEditTime: 2022-08-06 13:39:04
-->
<template>
  <div class="home-container">
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
}
.is-selected {
  color: #1989fa;
  font-weight: bold;
}
</style>
