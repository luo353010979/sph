import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from './components/TypeNav'
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
//引入路由
import router from './router'
//引入仓库
import store from './store'
//引入MockServer.js -------->mock虚拟数据
import '@/mock/mockServer'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this;
  },
  //注册路由
  router,
  //注册仓库:组件实例的身上会多了一个属性$store属性
  store
}).$mount('#app')