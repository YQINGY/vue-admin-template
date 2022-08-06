<!--
 * @Autor: yqy
 * @Date: 2022-07-23 16:24:07
 * @LastEditTime: 2022-08-06 12:25:52
-->
<template>
    <div class="msg-box">
        消息组件
    </div>
</template>

<script>
export default {
    name: "msg",
    data() {
        return {
            columns: [
                {
                    title: "Id",
                    key: "id"
                },
                {
                    title: "内容",
                    width: 400,
                    key: "content"
                },
                {
                    title: "创建时间",
                    key: "createTime"
                },
                {
                    title: "是否展示",
                    key: "show"
                },
                {
                    title: "Action",
                    slot: "action",
                    width: 150,
                    align: "center"
                }
            ],
            data: [],
            typeList: [
                {
                    value: "true",
                    label: "展示"
                },
                {
                    value: "false",
                    label: "不展示"
                }
            ],
            inputContent: "",
            selectModel: "",
            modal: false
        };
    },
    methods: {
        remove(index) {
            this.data.splice(index, 1);
        },
        ok() {
            this.$Message.info("Clicked ok");
        },
    }
};
</script>

<style scoped>
.msg-box {
    width: 100%;
    height: 100%;
}
::-webkit-scrollbar {
    display: none;
}
</style>
