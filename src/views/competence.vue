<!--
 * @Autor: yqy
 * @Date: 2022-07-25 21:17:02
 * @LastEditTime: 2022-08-01 18:57:46
-->
<template>
    <div class="competence-box">
        用户权限
    </div>
</template>

<script>
export default {
    name: "competence",
    data() {
        return {
            columns: [
                {
                    title: "用户id",
                    width: 150,
                    slot: "id"
                },
                {
                    title: "账号",
                    slot: "username"
                },
                {
                    title: "用户昵称",
                    slot: "alias"
                },
                {
                    title: "职业",
                    slot: "bio"
                },
                {
                    title: "邮箱",
                    width: 150,
                    slot: "email"
                },
                {
                    title: "手机号",
                    width: 150,
                    slot: "mobile"
                },
                {
                    title: "角色权限",
                    slot: "roleId"
                },
                {
                    title: "账号状态",
                    slot: "status"
                },
                {
                    title: "账号激活",
                    slot: "active"
                },
                {
                    title: "创建时间",
                    width: 200,
                    slot: "createTime"
                },
                {
                    title: "操作",
                    width: 220,
                    slot: "action"
                }
            ],
            data: [
                {
                    id: 11231231233213,
                    username: "lfg",
                    active: 1,
                    alias: "刘富贵",
                    bio: "大老板",
                    email: "233@qq.com",
                    mobile: 13202339832,
                    roleId: "0",
                    status: "0",
                    createTime: "2022-2-2"
                },
                {
                    id: 11231231233216,
                    username: "zxw",
                    active: 1,
                    alias: "张晓伟",
                    bio: "主播",
                    email: "324@qq.com",
                    mobile: 13202339832,
                    roleId: "1",
                    status: "0",
                    createTime: "2022-7-2"
                },
                {
                    id: 11231231233222,
                    username: "mff",
                    active: 1,
                    alias: "马飞飞",
                    bio: "包工头",
                    email: "123@qq.com",
                    mobile: 13202339832,
                    roleId: "1",
                    status: "0",
                    createTime: "2022-5-2"
                },
                {
                    id: 11231231233212,
                    username: "lbw",
                    active: 1,
                    alias: "卢本伟",
                    bio: "采花大盗",
                    email: "123222@qq.com",
                    mobile: 13202339832,
                    roleId: "1",
                    status: "0",
                    createTime: "2022-6-2"
                }
            ],
            editIndex: -1, // 当前聚焦的输入框的行数
            editObject: {
                id: "",
                username: "",
                active: "",
                alias: "",
                bio: "",
                email: "",
                mobile: "",
                roleId: "",
                status: "",
                createTime: ""
            }
        };
    },
    created() {},
    methods: {
        handleEdit(row, index) {
            for (let i in this.editObject) {
                for (let k in row) {
                    if (i == k) {
                        this.editObject[i] = row[k];
                    }
                }
            }
            this.editIndex = index;
        },
        // 更改用户信息
        handleSave(index) {
            for (let i in this.data[index]) {
                for (let k in this.editObject) {
                    if (i == k) {
                        this.data[index][i] = this.editObject[k]
                    }
                }
            }
            this.editIndex = -1;
        },
        // 删除指定的数据
        deleteData(index) {
            this.data.splice(index, 1);
            this.editIndex = -1;
        },
        // 时间格式化
        getBirthday(birthday) {
            const date = new Date(parseInt(birthday));
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return `${year}-${month}-${day}`;
        }
    }
};
</script>

<style scoped>
.competence-box {
    width: 100%;
    height: 100vh;
    padding: 20px;
}
</style>
