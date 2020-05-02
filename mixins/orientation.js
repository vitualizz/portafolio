export const Portrait = {
  data () {
    return {
      isPortrait: Boolean
    }
  },
  mounted () {
    if (process.browser) {
      this.isPortrait = ($(window).width() < $(window).height())
    }
  }
}
