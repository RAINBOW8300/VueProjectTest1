<template>
  <div class="mui-content">
        <div class="title">
            <h4>{{info.title}}</h4>
            <span>{{info.add_time|fmtdata('YYYY-DD-MM')}}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>点击次数:{{info.click}}</span>
        </div>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in images" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                   <img @click="$preview.open(index, images)" class="preview-img" :src="item.src" alt="">
            </li>
        </ul> 

        <p class="content" v-html="info.content"></p>

        <!-- 评论--> 
        <comment :id="id"></comment>
  </div>
</template>
<script>
//引入评论组件
import comment from '../../public/comment.vue'
//引入vue
import Vue from 'vue'
//引入preview插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
export default {
    data () {
        return {
            info:{},
            images:[]
        }
    },
    props: ['id'],
    created () {
      this.getimageInfo(),
      this.getthumimages()  
    },
    methods: {
        //获取图片详细信息
        getimageInfo(){
            this.$http.get('getimageInfo/'+this.id)
                .then((res)=>{
                    if(res.status==200&&res.data.status==0){
                        if(res.data.message.length>0){
                            this.info=res.data.message[0]
                        }
                    }else{
                        console.log("服务器请求失败")
                    }
                })
                .catch((err)=>{
                    console.error(err)
                })
        },
        //获取图片缩略图
        getthumimages(){
            this.$http.get('getthumimages/'+this.id)
                .then((res)=>{
                    if(res.status==200&&res.data.status==0){
                        this.images=res.data.message
                        this.images.forEach(item=>{
                            item.w=600;
                            item.h=400;
                        })
                    }else{
                        console.log("服务器请求错误")
                    }
                })
                .catch((err)=>{
                    console.error(err)
                })
        },
        //显示放大图片
        getpic(){

        }
    },
    //把评论组件模板对象挂载到detail页面
    components: {
        comment
    }
}
</script>

<style scoped>
 .mui-content {
    background-color: #fff;
  }
  .title {
        margin: 15px 5px;
    }
    
    .title h4 {
        color: dodgerblue;
    }
    
    .title span {
        font-size: 13px;
        color: rgba(92, 92, 92, 0.6);
    }
    /*9宫格样式*/
    
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border-left: 0px;
    }
    
    .mui-table-view-cell img {
        height: 100px;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
        padding: 0;
        margin: 0;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>
