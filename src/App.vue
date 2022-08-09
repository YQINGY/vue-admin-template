<!--
 * @Autor: yqy
 * @Date: 2022-08-01 18:49:54
 * @LastEditTime: 2022-08-01 23:27:49
-->
<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}
body {
    display: block;
    margin: 0;
}

</style>
