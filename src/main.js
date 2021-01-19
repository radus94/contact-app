import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/tailwind.css'
import store from './store'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VeeValidate)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
