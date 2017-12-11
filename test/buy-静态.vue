<template>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view">
        <li  class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="">
                <img class="mui-media-object" src="http://127.0.0.1:8899/upload/201504/20/thumb_201504200046589514.jpg">
                <div class="mui-media-body">荣耀</div>
            </a>
            <div class="bottom">
                <h6>
                    <span>￥1111</span>
                    <s>￥2222</s>
                </h6>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩余100件</span>
                </div>
            </div>     
        </li>
        <li  class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="">
                <img class="mui-media-object" src="http://127.0.0.1:8899/upload/201504/20/thumb_201504200046589514.jpg">
                <div class="mui-media-body">荣耀</div>
            </a>
            <div class="bottom">
                <h6>
                    <span>￥1111</span>
                    <s>￥2222</s>
                </h6>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩余100件</span>
                </div>
            </div>     
        </li>
        <li  class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="">
                <img class="mui-media-object" src="http://127.0.0.1:8899/upload/201504/20/thumb_201504200046589514.jpg">
                <div class="mui-media-body">荣耀</div>
            </a>
            <div class="bottom">
                <h6>
                    <span>￥1111</span>
                    <s>￥2222</s>
                </h6>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩余100件</span>
                </div>
            </div>     
        </li>
        <li  class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="">
                <img class="mui-media-object" src="http://127.0.0.1:8899/upload/201504/20/thumb_201504200046589514.jpg">
                <div class="mui-media-body">荣耀</div>
            </a>
            <div class="bottom">
                <h6>
                    <span>￥1111</span>
                    <s>￥2222</s>
                </h6>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩余100件</span>
                </div>
            </div>     
        </li>
        <li  class="mui-table-view-cell mui-media mui-col-xs-6">
            <a href="">
                <img class="mui-media-object" src="http://127.0.0.1:8899/upload/201504/20/thumb_201504200046589514.jpg">
                <div class="mui-media-body">荣耀</div>
            </a>
            <div class="bottom">
                <h6>
                    <span>￥1111</span>
                    <s>￥2222</s>
                </h6>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩余100件</span>
                </div>
            </div>     
        </li>
      </ul> 
    </div>
        
</template>

<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .mui-table-view:before {
        display: none;
    }
    
    .mui-table-view:after {
        display: none;
    }
    
    .mui-content>.mui-table-view:first-child {
        margin-top: 0px;
    }
    
    .mui-table-view.mui-grid-view .mui-table-view-cell {
        margin-right: 0px;
        padding: 0px;
    }
    
    .mui-table-view.mui-grid-view {
        padding: 5px;
    }
    
    .mui-table-view-cell {
        border: 1px solid rgba(92, 92, 92, 0.5);
        box-shadow: 0 0 4px #666;
        padding: 4px;
        margin-top: 5px;
        margin-left: 5px;
        width: 48%;
    }
    
    .mui-table-view-cell img {
        width: 100%;
    }
    
    .mui-table-view-cell:after {
        display: none;
    }
    
    .mui-table-view-cell>a {
        margin: 0;
    }
    
    .mui-table-view.mui-grid-view .mui-table-view-cell>a:not(.mui-btn) {
        margin: 0;
        margin-bottom: 5px;
        text-align: left;
        color: #000;
    }
    
    .bottom {
        text-align: left;
        background-color: rgba(92, 92, 92, 0.1);
        padding: 5px;
    }
    
    .bottom>h6>span {
        color: red;
        font-size: 14px;
        margin-right: 20px;
    }
    
    .bottom>.sell {
        margin-top: 15px;
        color: rgba(92, 92, 92, 0.8);
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }
</style>
