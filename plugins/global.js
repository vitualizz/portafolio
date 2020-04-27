import Vue from 'vue'

Vue.mixin({
  methods: {
    isLandscape () {
      if (process.browser) {
        return $(window).width() > $(window).height()
      }
    }
  }
})
