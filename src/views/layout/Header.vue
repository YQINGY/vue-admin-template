<!--
 * @Autor: yqy
 * @Date: 2022-08-02 08:58:59
 * @LastEditTime: 2022-08-04 17:13:12
-->
<template>
  <el-header height="110px">
    <div class="header-content">
      <div class="header-left">
        <i
          :class="[
            $store.state.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold',
          ]"
          @click="$store.commit('SET_COLLAPSE')"
        ></i>
      </div>
      <div>
        <p>管理员</p>
        <p>
          <el-dropdown>
            <span class="el-dropdown-link">
              王老五<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>
        <img
          class="user-logo"
          src="https://xuxuxu-ni.github.io/vue-xuAdmin/dist/static/images/icon.jpg"
          alt="用户头像"
        />
      </div>
    </div>
    <div class="header-right">
      <div
        :class="num == index ? 'active-tab' : 'default-tab'"
        v-for="(item, index) in routerList"
        :key="index"
      >
        <span @click="openMenu(item, index)">
          <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </span>
        <i
          v-if="item.meta.title != '主页'"
          class="el-icon-circle-close"
          @click="removeTab(index)"
        ></i>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "layoutAside",
  data() {
    return {
      isCollapse: false,
      routerList: this.$store.state.haderTabs,
      num: 0,
    };
  },
  watch: {},
  methods: {
    openMenu(item, index) {
      //   if (index === 0) {
      //     return false;
      //   }
      console.log(item);
      this.num = index;
      this.rightMenuShow = true;
      // this.$store.dispatch("openMenu", item);
    },
    removeTab(index) {
      this.routerList.splice(index, 1);
      console.log(this.routerList);
      return this.routerList;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-icon-s-fold,
::v-deep .el-icon-s-unfold {
  font-size: 25px;
  line-height: 55px;
}
.header-content {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d8dce5;
  div:last-child {
    display: flex;
    width: auto;
    justify-content: space-around;
    p {
      padding: 3.5px 5px;
      font-size: 14px;
      color: #606266;
    }
    .user-logo {
      display: block;
      width: 50px;
      height: 50px;
      padding: 2.5px 10px;
      border-radius: 50%;
    }
  }
}

.header-left {
  width: auto;
}
.header-right::-webkit-scrollbar {
  display: none;
}
.header-right {
  display: flex;
  justify-self: start;
  width: auto;
  height: 50px;
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #d8dce5;
  overflow: scroll;
  .default-tab {
    min-width: 80px;
    height: 36px;
    margin: 6px 5px;
    padding: 0 10px;
    line-height: 37px;
    font-size: 14px;
    text-align: center;
    transition: all 0.5s;
    border: 1px solid #d8dce5;
  }
  .active-tab {
    min-width: 80px;
    height: 36px;
    margin: 6px 5px;
    padding: 0 10px;
    line-height: 37px;
    font-size: 14px;
    text-align: center;
    transition: all 0.5s;
    background: #378fec;
    border: 1px solid #378fec;
    a {
      transition: all 0.5s;
      font-weight: 400;
      color: #f6f6f6;
      text-decoration: none;
    }
  }
  .el-icon-circle-close {
    padding-left: 20px;
    color: #999;
  }
  .el-icon-circle-close:hover {
    transition: all 0.5s;
    color: red;
  }
}
.router-link-active,
a {
  font-weight: 400;
  color: #999;
  text-decoration: none;
}
</style>
