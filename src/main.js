/*
 * @Author: zouzheng
 * @Date: 2020-06-08 17:13:16
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-08 17:18:31
 * @Description: 这是XXX组件（页面）
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  render: h => h(App),
}).$mount('#app')

