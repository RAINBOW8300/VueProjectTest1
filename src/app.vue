<template>
<div class="container">
   <header class="mui-bar mui-bar-nav">
        <a v-if="isShow" @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">底部选项卡-div模式</h1>
    </header>
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="member">
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="shopcar">
            <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="search">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
    export default{
        data() {
            return {
                isShow:false,
                routeArr:['/search','/home','/share','/member']
            }
        },
        created () {
            this.checkeds()
        },
        watch: {
            '$route':function(newvalue){
                this.checkeds()
            }
        },
        methods: {
            goback(){
                this.$router.back()
            },
            checkeds(){
                if(this.routeArr.indexOf(this.$route.path)==-1){
                    this.isShow=true
                }else{
                    this.isShow=false
                }
            }
        }
    }
</script>
<style scoped>

</style>

