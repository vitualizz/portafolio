<template lang='pug'>
  .info-container.has-text-centered
    div(v-if="isPortrait")
      Slide
        template(slot='slide')
          Description
      Slide
        template(slot='slide')
          .img(":style"="{ backgroundImage: `url(${imageMe})`}")
    .columns(v-else)
      .has-text-centered.column
        Description
      .img.column(":style"="{ backgroundImage: `url(${imageMe})`}")
</template>

<script>
import { Portrait } from '@/mixins/orientation.js'
import Slide from '@/components/shared/_slide.vue'
import Description from '@/components/home/info/Description.vue'

export default {
  components: {
    Slide,
    Description
  },
  mixins: [
    Portrait
  ],
  data () {
    return {
      imageMe: require('@/assets/imgs/pages/Home/Me/photo.png')
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
  .fp-slide
    .img
      height: 100%
  .columns
    height: 100%
    width: 100%
    margin: 0
    .column
      display: flex
      div
        margin: auto
</style>
