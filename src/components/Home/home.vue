<template>
    <div class="mui-content">
        <!-- 轮播图部分 -->
		<swipe :imageurl="getlunbo"></swipe>
		<!-- 九宫格部分 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="item in menus" :key="item.url" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link :to="item.url">
                	<span class="mui-icon " :class="item.className"></span>
                	<div class="mui-media-body">{{item.title}}</div>
				</router-link>
			</li>
        </ul> 
    </div>
</template>

<script>
//导入轮播图组件
import swipe from '../public/swipe.vue'

    export default{
        data(){
            return {
				images:[],
				menus:[],
				getlunbo:'getlunbo'
            }
		},
		created(){
			this.getmenus()
		},
		methods:{
			getmenus(){
				this.$http.get('getmenus')
					.then((res)=>{
						
						if(res.status===200&&res.data.status==0){
							this.menus=res.data.message;
							// console.log(this.menus)
						}else{
							console.log("服务器请求出错")
						}
					})
					.catch((err)=>{
						console.error(err)
					})
			}
		},
		components: {
			swipe
		}
    }
</script>

<style scoped>
/* 九宫格样式 */
.mui-grid-view.mui-grid-9{
	background: #fff
}
.mui-content > .mui-table-view:first-child{
	margin-top: 0;
}
span.mui-icon{
	width: 50px;
	height: 50px;
	background-repeat: round;
}
.icon-news{
	background-image: url(../../../statics/images/menu1.png)
}
.icon-share{
	background-image: url(../../../statics/images/menu2.png)
}
.icon-buy{
	background-image: url(../../../statics/images/menu3.png)
}
.icon-feedback{
	background-image: url(../../../statics/images/menu4.png)
}
.icon-video{
	background-image: url(../../../statics/images/menu5.png)
}
.icon-contact{
	background-image: url(../../../statics/images/menu6.png)
}
</style>

