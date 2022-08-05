<!--
 * @Autor: yqy
 * @Date: 2022-08-03 09:15:02
 * @LastEditTime: 2022-08-05 16:41:06
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
      <el-form-item label="密码" prop="user">
        <el-input
          type="text"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {setUserInfo } from '@/utils/storage' // 验权
export default {
  data() {
    return {
      ruleForm: {
        user: "",
        Pass: "",
      },
      rules: {
        user: [{required: true, message: '请输入用户名', trigger: 'blur' }],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(" submit! ");
          setUserInfo({'name':'yqy'})
          this.$router.push({ path: '/' });
        } else {
          console.log("error submit!");
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
<style>
.login-vue {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-repeat: no-repeat;
  background: url(../assets/images/1.jpg);
}
.formInline {
    width: 350px;
    padding: 50px 20px;
    margin-left: 700px;
    border-radius: 15px;
    background: rgba(1, 1, 1, 0.3);
}
</style>
