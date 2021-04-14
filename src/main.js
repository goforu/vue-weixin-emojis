import Vue from 'vue'
import App from './App.vue'
import plugin from './install'
plugin.install(Vue, {url: '/qqface.png'})
// install(Vue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
