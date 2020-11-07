import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import scenarios from './mock-data.js'

let data = {
    mutants: mock,
    scenarios: scenarios,
    teamChemistry: 0,
    teamPower: 0,
    team: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
