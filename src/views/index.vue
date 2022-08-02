<!--
 * @Autor: yqy
 * @Date: 2022-07-23 16:24:07
 * @LastEditTime: 2022-08-01 23:20:10
-->
<template>
    <div class="home-container">
    home 主页   
    </div>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {
            currentTime :''
        }
    },
    created(){
        this.currentTime = this.getCurrentTime()
    },
    mounted(){
        setInterval(() => {
            this.currentTime = this.getCurrentTime()
        }, 1000);
    },
    methods: {
        getCurrentTime() {
            //获取当前时间并打印
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth()+1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
            let time = yy+'年'+mm+'月'+dd+' '+hh+':'+mf+':'+ss;
            return time;
        }
    },
}
</script>

<style scoped>
.home-container {
    width: 100%;
    height: 100%;
    /* padding: 50px; */
}
</style>