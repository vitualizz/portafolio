<template lang='pug'>
  .has-text-centered
    div(:class="{ columns: isLandscape() }")
      div(:class="[ isLandscape() ? 'column' : 'slide' ]")
        LanguagesChart
      div(:class="[ isLandscape() ? 'column' : 'slide' ]")
        CodeActivityChart
</template>

<script>
import LanguagesChart from '@/components/home/skills/LanguagesChart.vue'
import CodeActivityChart from '@/components/home/skills/CodeActivityChart.vue'

export default {
  components: {
    LanguagesChart,
    CodeActivityChart
  }
}
</script>

<style scoped lang='sass'>
@media (min-width: $screen-md-min)
  .column
    &::v-deep .chart
      width: 70%
      margin: auto
</style>
