import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock_mutants from './mock-data-mutants.js'
import mock_scenarios from './mock-data-scenarios.js'

let data = {
    mutants: mock_mutants,
    scenarios: mock_scenarios,
    levels: [],
    team: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
