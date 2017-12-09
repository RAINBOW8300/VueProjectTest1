<template>
    <mt-swipe :auto="4000">
		<mt-swipe-item v-for="(item,index) in images" :key="index">
			<a :href="item.url">
				<img :src="item.img" alt="">
			</a>
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
export default {
	data(){
		return {
			images:[]
		}
	},
	created(){
		this.getlunbo()
	},
 	methods: {
		getlunbo(){
			this.$http.get('getlunbo')
				.then((res)=>{
					if(res.status===200&&res.data.status==0){
						this.images=res.data.message;
					}else{
						console.log("服务器请求失败")
					}
				}).catch((err)=>{
					console.log(err)
			})
		}
	}
}
</script>

<style scoped>
/* 轮播图样式 */
.mint-swipe{
	height: 250px;
}
.mint-swipe-items-wrap img{
	width: 100%;
	height: 100%;
}
</style>


