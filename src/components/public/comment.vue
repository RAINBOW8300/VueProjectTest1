<template>
   <!-- 评论 -->
    <div class="comment">
        <!--添加评论-->
        <h4>提交评论</h4>
        <div class="submitcomment">
            <textarea placeholder="请输入评论内容" v-model="content"></textarea>
            <button class="mui-btn mui-btn-primary" @click="postcomment">发表</button>
        </div>
        <!--评论列表-->
        <div class="title">
            <h4>评论列表</h4>
        </div>
        <div class="item" v-for="(item,index) in comments" :key="index">
            <div class="content">{{item.content}}</div>
            <div>
                <span class="user">{{item.user_name}}</span>  
                <span>{{item.add_time|fmtdata('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
        </div>
        <div class="more">
            <button @click="getmore" class="mui-btn mui-btn-primary mui-btn-outlined">加载更多</button>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
        comments:[],
        content:'',
        pageIndex:1
    }
  },
  props:['id'],
   created () {
    this.getcomment()
   },
   methods: {
        getcomment(){
            // console.log(this.id)
          this.$http.get('getcomments/'+this.id+'?pageindex='+this.pageIndex)
            .then((res)=>{
                if(res.status==200&&res.data.status==0){
                    this.comments=this.comments.concat(res.data.message)
                }else{
                    console.log("服务器出错了")
                }
                
            })
            .catch((err)=>{
                console.error(err)
            })
        },
        postcomment(){
            if(this.content.trim()==""){
                this.$toast("请输入评论内容")
                return
            }
            this.$http.post('postcomment/'+this.id,'content='+this.content)
                .then((res)=>{
                    if(res.status===200&&res.data.status===0){
                        //评论成功
                        this.comments.unshift({
                            user_name:'匿名用户',
                            add_time:new Date(),
                            content:this.content
                        })
                        this.content=""
                    }
                    this.$toast(res.data.message)
                })
                .catch((err)=>{
                    console.error(err)
                })
        },
        getmore(){
            this.pageIndex++
            this.getcomment()
        }
    }
}
</script>

<style scoped>
/*  评论的样式 */
    .submitcomment {
        text-align: center;
    }
    
    .submitcomment textarea {
        margin-top: 10px;
        padding: 0;
        width: 96%;
        height: 60px;
    }
    
    .submitcomment button {
        width: 96%;
    }
    
    .comment .title {
        border-top: 1px solid rgba(92, 92, 92, 0.4);
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
        margin: 20px 0 0 0;
        vertical-align: middle;
        padding: 10px 0;
    }
    
    .item {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
    }
    
    .item div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    
    .item span {
        font-size: 15px;
    }
    
    .item .user {
        color: skyblue;
    }
    
    .more {
        margin: 10px 0;
        text-align: center;
    }
    
    .more>button {
        width: 96%;
    }
</style>


