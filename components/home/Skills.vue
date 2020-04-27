<template lang='pug'>
  .has-text-centered
    .columns
      .column
        LanguagesChart
      .column
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
.column
  &::v-deep .chart
    width: 70%
    margin: auto
</style>
