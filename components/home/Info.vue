<template lang='pug'>
  .info-container
    div
      .has-text-centered(:class="{ columns: isLandscape() }")
        div(:class="[ isLandscape() ? 'column' : 'slide has-text-centered' ]")
          Description
        .img(
              ":style"="{ backgroundImage: `url(${imageMe})`}"
              :class="[ isLandscape() ? 'column' : 'slide' ]"
            )
</template>

<script>
import Description from '@/components/home/info/Description.vue'

export default {
  components: {
    Description
  },
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
