//引入vue
import Vue from 'vue'

//引入路由对象  从router.js里
import router from './config/router'
//引入过滤器模块 filter.js
import './config/filter'
//引入插件模块    asios插件  mint-UI插件 mui.css
import './config/plugins'



// 引入头尾组件
import tem from './app.vue'


let vm = new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(tem);
    },
    router,
    created() {
        //设置响应发出时的拦截器
        this.$http.interceptors.request.use(function(config) {
            // Do something before request is sent
            //这里的this指向为undefined
            this.$indicator.open("正在加载");
            return config;
        }.bind(this), function(error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor设置响应结束时的拦截器，相当与钩子函数
        this.$http.interceptors.response.use(function(response) {
            // Do something with response data
            this.$indicator.close("");
            return response;
        }.bind(this), function(error) {
            // Do something with response error
            return Promise.reject(error);
        });
    }
})