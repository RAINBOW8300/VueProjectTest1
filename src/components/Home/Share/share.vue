<template>
    <div class="mui-content">
    <div class="title">
      <ul :style="ulWidth">
          <li>
              <a @cilck.prevent="getImageList(-1)" href="javascript:;">全部</a>
          </li>
          <li v-for="item in category" :key="item.id">
              <a @cilck.prevent="getImageList(item.id)" href="javascript:;" >{{item.title}}</a>
          </li>
      </ul>
    </div>

    <div class="images">
      <ul>
          <li v-for="item in images" :key="item.id">
              <<router-link :to="{name:'imageDetail',params:{id:item.id}}">
                  <img :src="item.img_url" alt="">
                  <p class="cover">
                      <span>{{item.title}}</span><br>
                      {{item.zhaiyao}}
                  </p>
              </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
            return {
                category:[],
                ulWidth:'width:600px',
                images:[],
            }
        },
        created () {
            this.getimgcategory(),
            //默认获取全部图片列表
            this.getImageList(-1)
        },
        methods: {
            //获取图片分享导航栏的分类信息
            getimgcategory(){
                this.$http.get('getimgcategory')
                    .then((response)=>{
                        if(response.status===200&&response.data.status===0){
                            this.ulWidth="width:"+(response.data.message.length*78+50)+"px"
                            this.category=response.data.message
                        }else{
                            console.log("服务器请求失败")
                        }
                    })
                    .catch((err)=>{
                        console.error(err)
                    })
            },
            //获取图片列表信息
            getImageList(id){
                this.$http.get('getimages/'+id)
                    .then((res)=>{
                        // console.log(res)
                        if(res.status==200&&res.data.status==0){
                            this.images=res.data.message
                        }else{
                            console.log('服务器请求失败')
                        }
                    })
                    .catch((err)=>{
                        console.error(err)
                    })
            }
        }
    }
</script>

<style scoped>
ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
  }
  
  .title {
      overflow-x: auto;
      overflow-y: hidden;
  }
  
  .title>ul {
      width: 1000px;
  }
  /* webkit核心的浏览器 隐藏滚动条 */
  ::-webkit-scrollbar{
    display:none;
  }
  
  .title>ul>li {
      display: inline-block;
      padding: 20px 5px;
  }
  
  .images {
      margin-top: 10px;
  }
  
  .images>ul {}
  
  .images img {
      height: 300px;
      width: 100%;
  }
  
  .images>ul>li {
      position: relative;
  }
  
  .images .cover>span {
      font-weight: bold;
  }
  
  .images .cover {
      color: #fff;
      position: absolute;
      left: 0px;
      bottom: 0px;
      background-color: rgba(92, 92, 92, 0.4);
      width: 100%;
      margin-bottom: 5px;
  }
</style>
