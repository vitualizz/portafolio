<template lang='pug'>
  .container
    p.is-size-3 Actividad codeando los últimos 7 días
    p.is-size-5
      | Total de horas codeando:
      | {{ this.totalHours }}
    .chart
      no-ssr
        lineChart(ref="lineChart")
</template>

<script>
import DaysTranslate from '@/static/days.json'

export default {
  data () {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      totalHours: 0
    }
  },
  mounted () {
    this.getLastWeekLabels()
    this.getCodingActivity()
  },
  methods: {
    getLastWeekLabels () {
      let days = []
      for (let i = 0; i < 7; i++) {
        const d = new Date()
        d.setDate(d.getDate() - i)
        days = days.concat(DaysTranslate[d.getDay()])
      }
      this.chartData.labels = days.reverse()
    },
    getCodingActivity () {
      const self = this
      $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@vitualizz/2d269ef0-94dd-40df-ac20-8ad2ee4497c4.json',
        dataType: 'jsonp',
        success (response) {
          let activityData = []
          response.data.forEach(function (data) {
            activityData = activityData.concat(data.grand_total.hours)
          })
          self.chartData.datasets = self.chartData.datasets.concat({
            label: 'Horas Codeando',
            backgroundColor: '#f87979',
            data: activityData.reverse()
          })
          self.totalHours = activityData.reduce((a, b) => a + b, 0)
          self.drawChart()
        }
      })
    },
    drawChart () {
      this.$refs.lineChart.renderChart(this.chartData, {})
    }
  }
}
</script>
