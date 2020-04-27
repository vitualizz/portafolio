<template lang='pug'>
  .container
    p.is-size-3 Lenguajes usados los últimos 7 días
    p.is-size-5
      | Lenguaje más usado:
      | {{ this.languageMostUse }}
    .chart
      pieChart(ref="pieChart")
</template>

<script>
import languageColors from '@/static/languages.json'

export default {
  data () {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      languageMostUse: 'No se programar :c'
    }
  },
  mounted () {
    this.getLanguages()
  },
  methods: {
    getLanguages () {
      const self = this
      $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@vitualizz/97313d0e-b268-4757-b0f4-89401059e785.json',
        dataType: 'jsonp',
        success (response) {
          let labels = []
          let percentages = []
          let colors = []
          response.data.forEach(function (data) {
            labels = labels.concat(data.name)
            percentages = percentages.concat(Math.round(data.percent))
            colors = colors.concat(languageColors[data.name] || '#E5E5E5')
          })
          self.chartData.labels = labels
          self.chartData.datasets = self.chartData.datasets.concat({ data: percentages, backgroundColor: colors })
          self.drawChart()
          self.languageMostUse = labels[0]
        }
      })
    },
    drawChart () {
      this.$refs.pieChart.renderChart(this.chartData, {})
    }
  }
}
</script>
