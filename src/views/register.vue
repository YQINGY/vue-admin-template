<!--
 * @Autor: yqy
 * @Date: 2022-07-25 21:33:15
 * @LastEditTime: 2022-08-01 18:56:52
-->
<template>
    <div class="register-vue">
        注册账号
    </div>
</template>

<script>
import { registerAccount } from "@/api";
export default {
    name: "register",
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码."));
            } else {
                if (this.formInline.checkPass !== "") {
                    // 对第二个密码框单独验证
                    this.$refs.formInline.validateField("checkPass");
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入你的密码."));
            } else if (value !== this.formInline.pass) {
                callback(new Error("两次输入的密码不匹配！"));
            } else {
                callback();
            }
        };
        const validateEmail = (rule, value, callback) => {
            let strRegex = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            if (value === "") {
                return callback(new Error("请输入邮箱."));
            } else if (!strRegex.test(value)) {
                callback(new Error("去输入正确的邮箱格式."));
            } else {
                callback();
            }
        };
        return {
            formInline: {
                name: "",
                email: "",
                pass: "",
                checkPass: ""
            },
            ruleInline: {
                name: [{ required: true, message: "请输入账号.", trigger: "blur" }],
                email: [{ validator: validateEmail, trigger: "blur" }],
                pass: [
                    { validator: validatePass, trigger: "blur" },
                    { type: "string", min: 6, message: "密码的长度最少为6位数.", trigger: "blur" }
                ],
                checkPass: [{ validator: validatePassCheck, trigger: "blur" }]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    registerAccount(this.formInline).then(res => {
                        let data = res.data;
                        if (data.code == 200) {
                            this.$Message.success("Success!");
                            this.$router.push({ path: "/" });
                        } else {
                            this.$Message.error(data.message);
                        }
                    });
                } else {
                    this.$Message.error("Fail!");
                }
            });
        },
        giveFather(){
            this.$router.push({ path: "/" });
        }
    }
};
</script>

<style scoped>
.register-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-repeat: no-repeat;
    background: url(../assets/imgs/2.jpg);
}

.formInline {
    width: 380px;
    padding: 55px 60px;
    margin: auto;
    border-radius: 15px;
    background: rgba(100, 45, 79, 0.4);
}
.icon-x{
    margin-left: 90%;
}
.formInline .ivu-input-c {
    width: 260px;
    height: 40px;
}
::v-deep .ivu-input {
    height: 40px;
}

.primary {
    width: 260px;
    height: 40px;
}
</style>
