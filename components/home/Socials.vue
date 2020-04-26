<template lang='pug'>
  .columns
    .column
    .column.has-text-centered.fa-5x.brand(v-for='brand in brands')
      a(:href='brand.url' target='_blank')
       font-awesome-icon(:icon="[brand.type, brand.name]")
    .column
</template>

<script>
export default {
  data () {
    return {
      brands: [
        { type: 'fab', name: 'facebook', url: 'https://facebook.com/lee.devel0p' },
        { type: 'fab', name: 'instagram', url: 'https://instagram.com/lee.develop' },
        { type: 'fab', name: 'medium', url: 'https://medium.com/@vitualizz' },
        // { type: 'fa', name: 'whatsapp' },
        { type: 'fa', name: 'envelope', url: 'https://medium.com/@vitualizz' }
      ]
    }
  }
}
</script>

<style scoped lang='sass'>
.brand
  transition: all 0.3s ease
  a
    color: $color-blank
  &:hover
    -webkit-transform: scale(1.5)
    -ms-transform: scale(1.5)
    transform: scale(1.5)
</style>
