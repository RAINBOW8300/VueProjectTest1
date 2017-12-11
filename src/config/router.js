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
//图片详细页面
import imageDetail from '../components/Home/Share/detail.vue'
//导入商品详情页面
import buyDetail from '../components/Home/Buy/detail.vue'
//导入商品评价页面
import buyComment from '../components/Home/Buy/comment.vue'
// import default from 'vue';
//设置路由
let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', meta: { title: '首页' }, component: home },
        { path: '/member', meta: { title: '个人中心' }, component: member },
        { path: '/shopcar', meta: { title: '购物车' }, component: shopcar },
        { path: '/search', meta: { title: '搜索页面' }, component: search },
        { path: '/news', meta: { title: '新闻列表' }, component: news },
        { path: '/buy', meta: { title: '商品列表' }, component: buy },
        { path: '/content', meta: { title: '联系我们' }, component: content },
        { path: '/feedback', meta: { title: '留言反馈' }, component: feedback },
        { path: '/share', meta: { title: '图片分享' }, component: share },
        { path: '/video', meta: { title: '视频专区' }, component: video },
        { name: 'newsDetail', meta: { title: '新闻详情' }, path: '/detail/:id', component: newsDetail, props: true },
        { name: 'imageDetail', meta: { title: '图片详情' }, path: '/getimageInfo/:id', component: imageDetail, props: true },
        { name: 'buyDetail', meta: { title: '商品详情页' }, path: '/goods/getinfo/:id', component: buyDetail, props: true },
        { name: 'buyComment', meta: { title: '商品图文展示' }, path: '/buyComment/:id', component: buyComment, props: true }
    ],
    linkActiveClass: 'mui-active'
})

export default router