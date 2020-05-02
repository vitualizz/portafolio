<template lang='pug'>
  .skills.has-text-centered
    div(v-if="isPortrait")
      Slide
        template(slot='slide')
          LanguagesChart
      Slide
        template(slot='slide')
          CodeActivityChart
    .columns(v-else)
      .column
        LanguagesChart
      .column
        CodeActivityChart
</template>

<script>
import { Portrait } from '@/mixins/orientation.js'
import Slide from '@/components/shared/_slide.vue'
import LanguagesChart from '@/components/home/skills/LanguagesChart.vue'
import CodeActivityChart from '@/components/home/skills/CodeActivityChart.vue'

export default {
  components: {
    Slide,
    LanguagesChart,
    CodeActivityChart
  },
  mixins: [
    Portrait
  ]
}
</script>

<style scoped lang='sass'>
.skills
  height: 100%
  display: flex
  align-items: center
.columns
  width: 100%
@media (min-width: $screen-md-min)
  .column, .fp-slide
    &::v-deep .chart
      width: 70%
      margin: auto
</style>
