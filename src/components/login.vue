<!--
 * @Autor: yqy
 * @Date: 2022-08-03 09:15:02
 * @LastEditTime: 2022-08-06 13:34:32
-->
<template>
  <div class="login-vue">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="formInline"
    >
      <el-form-item label="账号：" prop="user" style="width: 320px">
        <el-input
          type="text"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass" style="width: 320px">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="margin-right: 30px !important"
          @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { setUserInfo } from "@/utils/storage"; // 验权
export default {
  data() {
    return {
      ruleForm: {
        user: "admin",
        Pass: "123456"
      },
      rules: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setUserInfo({ name: this.ruleForm.user, root:this.ruleForm.user =='admin' ? true : false });
          const loading = this.$loading({
            lock: true,
            text: "玩命加载中...",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.8)",
          });
          setTimeout(() => {
            loading.close();
            this.$router.push({ path: "/" });
          }, 1200);
        } else {
          this.$message.error('error');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.login-vue {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}
.formInline {
  width: 350px;
  padding: 75px 15px;
  border-radius: 10px;
  background-color: #2d3a4b;
  box-shadow: 5px 5px 15px #010101;
}
::v-deep .el-form-item__label {
  color: #fff;
  width: 70px !important;
}
::v-deep .el-button--primary {
  width: 220px;
}
</style>
