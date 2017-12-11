<template>
    <div class="mui-content">
        <div class="detail">
            <div class="top">
                <!-- 轮播图 -->
                <swipe :imageurl="imageUrl"></swipe>
            </div>
        </div>
        <div class="sell">
            <h4>{{buyDetail.title}}</h4>
            <div class="price">
                市场价：<s>￥{{buyDetail.market_price}}</s> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销售价：<span>￥{{buyDetail.sell_price}}</span>
            </div>
            <div class="num">
                购买数量：xxx
                <div class="ball"></div>
            </div>
            <div class="button">
                <button class="mui-btn mui-btn-primary">立刻购买</button>
                <button class="mui-btn mui-btn-danger">加入购物车</button>
            </div>
        </div>

        <div class="param">
            <h5>商品参数</h5>
            <div class="info">
                <p>商品编号：{{buyDetail.goods_no}}</p>
                <p>库存情况：{{buyDetail.stock_quantity}}件</p>
                <p>上架时间：{{buyDetail.add_time|fmtdata('YYYY-MM-DD HH:mm:ss')}}</p>
            </div>
        </div>
        
        <div class="footer">
            <a class="mui-btn mui-btn-primary mui-btn-outlined">图文介绍</a>
            <a @click="comment()" class="mui-btn mui-btn-danger mui-btn-outlined">商品评论</a>
        </div>
    </div>
</template>

<script>
 //引入轮播图组件
 import swipe from '../../public/swipe.vue'
 //导入不同组件之间通信用的组件
import vueObj from '../../public/communicat.js'

    //导出组件
    export default {
        data() {
            return {
                buyDetail:{},
                imageUrl:'getthumimages/'+this.id,
                buyInfo:{}
            }
        } ,
        props:['id'],
        created () {
            this.buyGetDetail()
        },
        methods: {
            buyGetDetail(){
                this.$http.get('goods/getinfo/'+this.id)
                    .then((res)=>{
                        if(res.status==200&&res.data.status==0){
                            if(res.data.message.length){
                                this.buyDetail=res.data.message[0]
                            }
                        }else{
                            this.$toast("服务器请求出错")
                        }
                    })
                    .catch((err)=>{
                        console.error(err)
                    })
            },
            getimageInfo(){
                this.$http.get('goods/getdesc/'+this.id)
                    .then((res)=>{
                        if(res.status==200&&res.data.status==0){
                            if(res.data.message.length){
                                this.buyInfo=res.data.message[0]
                            }
                        }else{
                            this.$toast("服务器请求错误")
                        }
                    })
                    .catch((err)=>{
                        console.error(err)
                    })
            },
            comment(){
                this.$router.push('/buyComment/'+this.id)
            }
        },
        components: {
            swipe
        }
    }
</script>

<style scoped>
    .num {
        position: relative;
    }
    
    .ball {
        left: 115px;
        top: 3px;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        transition: all 0.5s linear;
        z-index: 1000;
        
    }
    
    .mui-content {
        background-color: #fff;
    }
    
    .top,
    .sell,
    .param,
    .footer {
        border: 1px solid rgba(92, 92, 92, 0.7);
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
    }
    
    .sell h4 {
        color: dodgerblue;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .price,
    .num,
    .button {
        margin: 10px;
        font-size: 15px;
    }
    
    .price span {
        font-size: 18px;
        color: red;
    }
    
    .param h5 {
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .info {
        margin-top: 10px;
        margin-left: 20px;
    }
    
    .info p {
        margin: 0;
    }
    
    .footer .mui-btn {
        width: 100%;
    }
    
    .footer .mui-btn-danger {
        margin-top: 10px;
    }
</style>
