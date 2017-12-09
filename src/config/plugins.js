import Vue from 'vue'
//引入axios
import axios from 'axios';
// baseURL 基地址 将来发送请求的时候设置的地址都会拼接到baseURL之后

axios.defaults.baseURL = 'http://127.0.0.1:8899/api/'; //远程服务器地址http://vue.studyit.io

// 挂载到VUE对象上，让所有组件都可以访问到
Vue.prototype.$http = axios;

//引入mui插件样式
import '../../statics/css/mui.css'
//引入mint插件，进行全局配置
import MintUI from 'mint-ui'
// 引入mint样式
import 'mint-ui/lib/style.css'
// 在vue实例上注册mint-ui
Vue.use(MintUI)