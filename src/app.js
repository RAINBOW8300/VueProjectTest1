//引入vue
import Vue from 'vue'
//引入Vue-router路由模块
import VueRouter from 'vue-router'
// 注册vuerouter
Vue.use(VueRouter)

//引入axios
import axios from 'axios';
// baseURL 基地址 将来发送请求的时候设置的地址都会拼接到baseURL之后
//http://192.168.144.71:8899/api/getlunbo
//引入moment模块
import moment from 'moment';
//创建一个moment过滤器
Vue.filter('fmtdata', (value, fmt) => {
    return moment(value).format(fmt)
})
axios.defaults.baseURL = 'http://127.0.0.1:8899/api/'; //http://vue.studyit.io
// axios.defaults.baseURL = 'http://127.0.0.1:3000/api/';
// 挂载到VUE对象上，让所有组件都可以访问到
Vue.prototype.$http = axios;


// 引入单文件组件
import home from './components/Home/home.vue'
import member from './components/Member/member.vue'
import shopcar from './components/Shopcar/shopcar.vue'
import search from './components/Search/search.vue'
// import news from './components/News/News.vue'
// import detail from './components/News/detail.vue'
import news from './components/Home/News/news.vue'
import buy from './components/Home/Buy/buy.vue'
import content from './components/Home/Content/content.vue'
import feedback from './components/Home/Feedback/feedback.vue'
import share from './components/Home/Share/share.vue'
import video from './components/Home/Video/video.vue'
//新闻详情页面的路由
import newsDetail from './components/Home/News/detail.vue'







let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/news', component: news },
        { path: '/buy', component: buy },
        { path: '/content', component: content },
        { path: '/feedback', component: feedback },
        { path: '/share', component: share },
        { path: '/video', component: video },
        {
            name: 'newsDetail',
            path: '/detail/:id',
            component: newsDetail,
            props: true
        }
    ],
    linkActiveClass: 'mui-active'
})



// 引入头尾组件
import tem from './app.vue'
//引入mui.css文件
import '../statics/css/mui.css'

let vm = new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(tem);
    },
    router
})