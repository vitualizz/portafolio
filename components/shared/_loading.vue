<template lang='pug'>
  .loading-wrapper(v-show='show')
    .loader-main
      img.image-load(:src='logoImg')
</template>

<script>
export default {
  props: {
    logoImg: String
  },
  data () {
    return {
      show: true
    }
  },
  mounted () {
    this.loadingComplete()
  },
  methods: {
    loadingComplete () {
      const self = this
      $(window).on('load', function () {
        setTimeout(function () {
          self.show = false
        }, 2000)
      })
    }
  }
}
</script>

<style scoped lang='sass'>
.loading-wrapper
  position: absolute
  z-index: 999
  width: 100%
  height: 100%
  display: flex
  background: #fafafa
  .loader-main
    margin: auto
    .image-load
      width: 250px
      animation: 3s infinite ease-in-out floating

@keyframes floating
  from
    transform: translate(0, 0px)
  65%
    transform: translate(0, 20px)
  to
    transform: translate(0, 0px)

</style>
