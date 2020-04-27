import Vue from 'vue'
import { Line, Pie } from 'vue-chartjs'

Vue.component('pieChart', { extends: Pie })
Vue.component('lineChart', { extends: Line })
