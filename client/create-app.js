// 每次服务端都会渲染一次app，每次都会创建一个新的app
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// vue第三方组件
import Meta from 'vue-meta'

import App from './app.vue'
import createStore from './store/store'
import createRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
