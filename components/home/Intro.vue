<template lang='pug'>
  .has-text-centered
    img(":src"='logoImg').logo-img
    p.text Developer / Design
</template>

<script>
export default {
  data () {
    return {
      logoImg: require('@/assets/imgs/Resources/logo_img.png')
    }
  }
}
</script>

<style scoped lang='sass'>
.logo-img
  border-radius: 100%
  width: 30vh
.text
  margin-top: 20px
  letter-spacing: 5px
  color: $color-blank
  font-family: $font-manjari
  font-weight: $weight-regular
  font-size: 2rem
</style>
