import Vue from 'vue'
import Demo from './demo/Demo.vue'
import div100vh from './div100vh'

Vue.config.productionTip = false

Vue.use(div100vh)

Vue.component('div100vh', div100vh)

new Vue({
  render: h => h(Demo),
}).$mount('#app')
