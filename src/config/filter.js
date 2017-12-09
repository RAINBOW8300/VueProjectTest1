import Vue from 'vue'
//引入moment模块
import moment from 'moment';
//创建一个moment过滤器
Vue.filter('fmtdata', (value, fmt) => {
    return moment(value).format(fmt)
})