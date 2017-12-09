<template>
    <div class="mui-content">
        <!-- 新闻详细内容 -->
        <div class="title">
            <h3>{{news.title}}</h3>
            <span>{{news.add_time|fmtdata('YYYY-MM-DD')}}&nbsp;&nbsp;&nbsp;&nbsp;{{news.click}}次浏览</span>
            
            <div class="details" v-html="news.content"></div>
        </div>
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
    </div>
</template>

<script>
import '../../../../statics/css/style.css'
import { Toast } from 'mint-ui';
export default {
  data(){
      return {
          news:{},
          comments:[],
          content:'',
          pageIndex:1
      }
  },
  props:['id'],
  created () {
    this.getnew()
    this.getcomment()
  },
  methods: {
      getnew(){
        //   console.log(this.id)
          this.$http.get('getnew/'+this.id)
            .then((res)=>{
                if(res.status==200&&res.data.status==0&&res.data.message.length>0){
                    this.news=res.data.message[0]
                    // console.log(this.news)
                }
            })
            .catch((err)=>{
                console.error(err)
            })
      },
      getcomment(){
          this.$http.get('getcomments/'+this.id+'?pageindex='+this.pageIndex)
            .then((res)=>{
                if(res.status==200&&res.data.status==0){
                    if(res.data.message.length>0){
                        this.comments=this.comments.concat(res.data.message) 
                    }
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
              Toast("请输入评论内容")
              return
          }
        this.$http.post('postcomment/'+this.id,"content="+this.content)
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
                console.log(res.data.message)
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
.mui-content {
    background-color: #fff;
  }
  .title {
    padding: 10px 5px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.1);
  }
  .title h3 {
    font-size: 16px;
    font-weight: bold;
    color: #0094ff;
  }
  .title span {
    color: rgba(92, 92, 92, 0.7);
    font-size: 12px;
  }
  .details {
    padding: 5px 5px;
    overflow: hidden;;
  }
  .mui-content {
    background-color: #fff;
  }
  .title {
    padding: 10px 5px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.1);
  }
  .title h3 {
    font-size: 16px;
    font-weight: bold;
    color: #0094ff;
  }
  .title span {
    color: rgba(92, 92, 92, 0.7);
    font-size: 12px;
  }
  .details {
    padding: 5px 5px;
    overflow: hidden;;

  }
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

