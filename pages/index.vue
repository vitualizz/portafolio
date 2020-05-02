<template lang='pug'>
  full-page(ref='fullpage' :options='options')
    .section.intro(":style"="{ backgroundImage: `url(${intro.bgImage})`}")
      Intro
    .section.info
      Info
    .section.skills
      Skills
    .section.socials
      Socials
</template>

<script>
import Intro from '@/components/home/Intro.vue'
import Info from '@/components/home/Info.vue'
import Skills from '@/components/home/Skills.vue'
import Socials from '@/components/home/Socials.vue'
export default {
  components: {
    Intro,
    Info,
    Skills,
    Socials
  },
  data () {
    return {
      options: {
        navigation: true,
        navigationTooltips: ['Inicio', 'Conóceme', 'Habilidades', 'Contactamé']
      },
      intro: {
        bgImage: require('~/assets/imgs/pages/Home/Intro/bg.png')
      }
    }
  }
}
</script>

<style scoped lang='sass'>
.fullpage-wrapper
  display: block
.intro
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat
.info
  height: 100%
  .fp-tableCell
    padding: 0
    margin: 0
    display: flex
.info, .skills, .socials
  padding: 0
.skills
  margin: auto 10px
.socials
  background-color: $color-black
</style>
