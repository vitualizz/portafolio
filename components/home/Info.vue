<template lang='pug'>
  div.info-container
    div(v-if="useSlide")
      .slide.has-text-centered
        Description
      .slide.img(":style"="{ backgroundImage: `url(${imageMe})`}")
    div(v-else)
      .columns.has-text-centered
        .column
          Description
        .column.img(":style"="{ backgroundImage: `url(${imageMe})`}")
</template>

<script>
import Description from '@/components/home/info/Description.vue'

export default {
  components: {
    Description
  },
  data () {
    return {
      imageMe: require('@/assets/imgs/pages/Home/Me/photo.png'),
      useSlide: Boolean
    }
  },
  created () {
    if (process.browser) {
      this.useSlide = this.activeSlide()
    }
  },
  methods: {
    activeSlide () {
      return $(window).width() < $(window).height()
    }
  }
}
</script>

<style scoped lang='sass'>
.img
  background-size: cover
  background-position: center
.info-container
  height: 100%
  display: flex
  div
    width: 100%
    .columns
      height: 100%
      margin: 0
      .column
        display: flex
        div
          margin: auto
</style>
