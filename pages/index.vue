<template lang='pug'>
  full-page(ref='fullpage' :options='options')
    .section.intro(":style"="{ backgroundImage: `url(${intro.bgImage})`}")
      Intro
    .section
</template>

<script>
import Intro from '@/components/home/Intro.vue'
export default {
  components: {
    Intro
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
</style>
