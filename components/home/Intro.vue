<template lang='pug'>
  .has-text-centered
    img(":src"='logoImg').logo-img
    p.text
</template>

<script>
import TypeIt from 'typeit'

export default {
  data () {
    return {
      logoImg: require('@/assets/imgs/Resources/logo_img.png')
    }
  },
  mounted () {
    new TypeIt('.text', {
      strings: [
        '@lee.develop',
        'Desarrollador Web',
        'Yo ❤️  Tecnologia'
      ],
      loop: true,
      breakLines: false
    }).go()
  }
}
</script>

<style scoped lang='sass'>
.logo-img
  border-radius: 100%
  width: 30vh
.text
  margin-top: 20px
  letter-spacing: 3px
  color: $color-blank
  font-family: $font-manjari
  font-weight: $weight-bold
  font-size: 2rem
</style>
