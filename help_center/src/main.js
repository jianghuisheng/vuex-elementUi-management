/*
 * node_modules中的依赖可以直接全局引用
 * ./ ../ @/   .vue结尾可以不用写  @在build中的webpack.base.confi.js中
 * vue-cli引入默认index.js不用写全路径
 */
import Vue from "vue";
import App from "./App";
import router from "./router";

// 引入elmentUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入echarts
import echarts from "echarts";

// 引入axios
import axios from "axios";

// 引入Vuex
import store from './vuex/store';

// 有exportdefault或者install方法的要用Vue.use 例如 export default ElementUI
Vue.use(ElementUI);

// 直接导出的局部引用import  全局需要挂载到原型上
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
