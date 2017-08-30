import Vue from 'vue'
import App from './App.vue'

import Rate from '../../src/index.js'
Vue.component(Rate.name, Rate)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
