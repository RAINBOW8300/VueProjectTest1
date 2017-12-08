<template>
  <div class="mui-content mycontent">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
            <router-link :to="{name:'newsDetail',params:{id:item.id}}">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    {{item.title}}
                    <p class="zhaiyao">{{item.zhaiyao}}</p>
                    <div class="blue">
                        <a href="#" class="l">发表时间:{{item.add_time|fmtdata('YYYY-MM-DD')}}</a>
                        <a href="#" class="f">点击人数:{{item.click}}</a>
                    </div>
                </div>
            </router-link>
        </li>
        <!-- <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="../../../../statics/images/menu1.png">
                <div class="mui-media-body">
                    幸福
                    <div class="blue"><a href="#" class="l">发表时间:2017/12/7</a><a href="#" class="f">点击人数:111</a></div>
                </div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="../../../../statics/images/menu1.png">
                <div class="mui-media-body">
                    幸福
                    <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                </div>
            </a>
        </li> -->
    </ul>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                newList:[]
            }
        },
        created () {
            this.getnewslist();
        },
        methods: {
            getnewslist(){
                this.$http.get('getnewslist')
                    .then((res)=>{
                        if(res.status==200&&res.data.status==0){
                            this.newList=res.data.message
                        }else{
                            console.log("服务器请求失败")
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
ul{
    margin-top: 0 !important
}
.l{
    float: left;
}
.f{
    float: right;
}
.blue a{
    font-size: 12px;
}
.mui-table-view .mui-table-view-cell{
    font-size: 14px;
}
.zhaiyao{
    color:ccc
}
</style>

