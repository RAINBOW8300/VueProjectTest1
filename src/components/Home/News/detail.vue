<template>
    <div class="mui-content">
        <!-- 新闻详细内容 -->
        <div class="title">
            <h3>{{news.title}}</h3>
            <span>{{news.add_time|fmtdata('YYYY-MM-DD')}}&nbsp;&nbsp;&nbsp;&nbsp;{{news.click}}次浏览</span>
            
            <div class="details" v-html="news.content"></div>
        </div>
        <!-- 评论列表|添加评论 -->
        <comment :id='id'></comment>
    </div>
</template>

<script>
//引入评论模块
import comment from '../../public/comment.vue';

export default {
  data(){
      return {
          news:{}
      }
  },
  props:['id'],
  created () {
    this.getnew()
  },
  methods: {
      getnew(){
        //   console.log(this.id)
          this.$http.get('getnew/'+this.id)
            .then((res)=>{
                if(res.status==200&&res.data.status==0){
                    if(res.data.message.length>0){
                        this.news=res.data.message[0]
                    }
                }
            })
            .catch((err)=>{
                console.error(err)
            })
      }
  },
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
</style>

