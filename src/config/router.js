import Vue from 'vue'
//引入Vue-router路由模块
import VueRouter from 'vue-router'
// 注册vuerouter
Vue.use(VueRouter)
    // 引入单文件组件
import home from '../components/Home/home.vue'
import member from '../components/Member/member.vue'
import shopcar from '../components/Shopcar/shopcar.vue'
import search from '../components/Search/search.vue'
// import news from '../components/News/News.vue'
// import detail from '../components/News/detail.vue'
import news from '../components/Home/News/news.vue'
import buy from '../components/Home/Buy/buy.vue'
import content from '../components/Home/Content/content.vue'
import feedback from '../components/Home/Feedback/feedback.vue'
import share from '../components/Home/Share/share.vue'
import video from '../components/Home/Video/video.vue'
//新闻详情页面的路由
import newsDetail from '../components/Home/News/detail.vue'
// import default from 'vue';
//设置路由
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

export default router