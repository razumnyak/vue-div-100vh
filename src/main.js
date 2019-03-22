import Vue from 'vue'
import Demo from './demo/Demo.vue'
import Vue100vh from './vue100vh'

Vue.config.productionTip = false

Vue.use(Vue100vh)

Vue.component('Vue100vh', Vue100vh)

new Vue({
  render: h => h(Demo),
}).$mount('#app')
