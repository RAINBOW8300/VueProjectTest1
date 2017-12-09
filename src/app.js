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
    router
})