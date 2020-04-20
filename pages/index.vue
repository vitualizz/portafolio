<template lang='pug'>
  full-page(ref='fullpage' :options='options')
    .section.intro(":style"="{ backgroundImage: `url(${intro.bgImage})`}")
      Intro
    .section.info
      Info
</template>

<script>
import Intro from '@/components/home/Intro.vue'
import Info from '@/components/home/Info.vue'

export default {
  components: {
    Intro,
    Info
  },
  data () {
    return {
      intro: {
        bgImage: require('~/assets/imgs/pages/Home/Intro/bg.png')
      }
    }
  }
}
</script>

<style scoped lang='sass'>
.intro
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat
.info
  height: 100%
  padding: 0
  .fp-tableCell
    padding: 0
    margin: 0
    display: flex
</style>
