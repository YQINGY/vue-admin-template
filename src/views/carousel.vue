<!--
 * @Autor: yqy
 * @Date: 2022-07-25 21:14:08
 * @LastEditTime: 2022-08-01 18:58:01
-->
<template>
    <div class="carousel-box">
    轮播广告 
    </div>
</template>

<script>
import { updateFile, queryAll, add } from "@/api";
export default {
    name: "carousel",
    data() {
        return {
            columns: [
                {
                    title: "Id",
                    key: "id"
                },
                {
                    title: "图片路径",
                    width: 400,
                    key: "imgurl"
                },
                {
                    title: "跳转链接",
                    key: "link"
                },
                {
                    title: "广告类型",
                    key: "type"
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
                    value: 0,
                    label: "默认"
                },
                {
                    value: 1,
                    label: "旅游"
                }
            ],
            echoUrl: "",
            selectModel: "",
            linkUrl: "",
            modal: false
        };
    },
    created() {
        this.queryAll();
    },
    methods: {
        remove(index) {
            this.data.splice(index, 1);
        },
        ok() {
            let data = {
                link: this.linkUrl,
                imgurl: this.echoUrl,
                type: this.selectModel
            };
            add(data).then(res => {
                let data = res.data;
                if (data.code == 200) {
                    this.queryAll();
                } else {
                    this.$Message.error(data.message);
                }
            });
            this.echoUrl = "";
            this.linkUrl = "";
            this.selectModel = "";
        },
        onFileChange(event) {
            let fileList = event.target.files;
            if (fileList.length > 0) {
                let file = fileList[0];
                let formData = new FormData();
                formData.append("file", file);
                updateFile(formData).then(res => {
                    let data = res.data;
                    console.log(data);
                    if (data.code == 200) {
                        this.echoUrl = data.data.fileUrl;
                    } else {
                        this.$Message.error(data.message);
                    }
                });
            }
        },
        deleImage() {
            this.echoUrl = "";
        },
        queryAll() {
            queryAll().then(res => {
                let data = res.data;
                if (data.code == 200) {
                    this.data = data.data;
                } else {
                    this.$Message.error(data.message);
                }
            });
        }
    }
};
</script>

<style scoped>
.carousel-box {
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;
}
::-webkit-scrollbar {
    display: none;
}
.updataFile {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}
.echoUrl-box {
    position: relative;
    width: 100px;
}
.dele-img {
    position: absolute;
    padding: 35px;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: 0;
    border-radius: 10px;
    background: rgba(19, 19, 19, 0.7);
}
.dele-img:hover {
    opacity: 100;
}
.input-img {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    text-align: center;
    background: rgba(89, 88, 88, 0.3);
}
.up-file {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
}
.input-img > div {
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
.Icon {
    padding: 20px;
}
::v-deep .ivu-input {
    margin: 10px 0;
}
.echoUrl {
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 10px;
}
</style>
