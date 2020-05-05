<template>
  <div>
    <Loading
      :logoImg='logoImg'
    />
    <nuxt />
  </div>
</template>

<script>
import Loading from '@/components/shared/_loading.vue'
export default {
  components: {
    Loading
  },
  data () {
    return {
      logoImg: require('@/assets/imgs/Resources/logo_letter.png')
    }
  }
}
</script>
