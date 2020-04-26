<template lang='pug'>
  .small.has-text-centered
    p.is-size-3 Lenguajes usados los últimos 7 días
    .container
      pieChart(ref="pieChart")
</template>

<script>
import languageColors from '@/static/languages.json'

export default {
  data () {
    return {
      pieData: {
        labels: [],
        datasets: []
      }
    }
  },
  mounted () {
    this.getLanguages()
    this.getCodingActivity()
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
          self.pieData.labels = labels
          self.pieData.datasets = self.pieData.datasets.concat({ data: percentages, backgroundColor: colors })
          self.drawChart(self.pieData)
        }
      })
    },
    getCodingActivity () {
      $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@vitualizz/2d269ef0-94dd-40df-ac20-8ad2ee4497c4.json',
        dataType: 'jsonp',
        success (response) {
          console.log(response.data)
        }
      })
    },
    drawChart (data, options = {}) {
      this.$refs.pieChart.renderChart(data, options)
    }
  }
}
</script>

<style scoped lang='sass'>
.small
  max-width: 600px
  margin:  150px auto
</style>
