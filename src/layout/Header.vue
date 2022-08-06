<!--
 * @Autor: yqy
 * @Date: 2022-08-02 08:58:59
 * @LastEditTime: 2022-08-06 20:15:09
-->
<template>
  <el-header height="115px">
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
        <p>{{ userInfo.roleId == 0 ? "管理员" : "普通用户" }}</p>
        <p>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ userInfo.username
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item
                ><span @click="logout">退出登录</span></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </p>
        <img class="user-logo" :src="userInfo.avatar" alt="用户头像" />
      </div>
    </div>
    <div class="header-right">
      <div
        :class="item.checked ? 'active-tab' : 'default-tab'"
        v-for="(item, index) in $store.state.haderTabs"
        :key="index"
      >
        <span @click="openMenu(item, index)">
          <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </span>
        <i
          v-if="item.meta.title != '主页'"
          class="el-icon-circle-close"
          @click="removeTab(item, index)"
        ></i>
      </div>
    </div>
  </el-header>
</template>

<script>
import {
  getUserInfo,
  removeUserInfo,
  removeHaderTabs,
  removeAsideMenu,
} from "@/utils/storage"; // 验权
export default {
  name: "layoutAside",
  data() {
    return {
      isCollapse: false,
      userInfo: getUserInfo(),
      windowWidth: document.documentElement.clientWidth,
    };
  },
  watch: {
    windowWidth(val) {
      if (val < 950) this.$store.commit("SET_COLLAPSE", true);
    },
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        this.windowWidth = window.fullWidth; // 浏览器宽度
      })();
    };
  },
  methods: {
    openMenu(item) {
      this.$store.commit("UPDATA_TABSTYPE", item);
    },
    removeTab(item, index) {
      this.$store.dispatch("asyncDeleTbas", { item, index });
    },
    logout() {
      removeUserInfo();
      removeHaderTabs();
      removeAsideMenu();
      const loading = this.$loading({
        lock: true,
        text: "玩命加载中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.8)",
      });
      setTimeout(() => {
        loading.close();
        this.$router.push({ path: "/login", replace: true });
      }, 500);
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
      padding: 5px;
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
.header-right {
  display: flex;
  justify-self: start;
  min-width: auto;
  height: 55px;
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #d8dce5;
  border: 1px solid #f6f6f6;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  text-overflow:ellipsis;
  .default-tab {
    min-width: 90px;
    height: 36px;
    margin: 6px 5px;
    padding: 0 10px;
    line-height: 37px;
    font-size: 14px;
    text-align: center;
    transition: all 0.5s;
    border: .5px solid #d8dce5;
  }
  .active-tab {
    min-width: 90px;
    height: 36px;
    margin: 6px 5px;
    padding: 0 10px;
    line-height: 37px;
    font-size: 14px;
    text-align: center;
    transition: all 0.5s;
    background: #378fec;
    border: .5px solid #378fec;
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


/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.header-right::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
/*定义滚动条轨道 内阴影+圆角*/
.header-right::-webkit-scrollbar-track {
  width: 90%;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius:50px;
  background-color: rgb(211, 209, 209);
}
/*定义滑块 内阴影+圆角*/
.header-right::-webkit-scrollbar-thumb {
  border-radius:50px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #6896f2;
}
</style>
