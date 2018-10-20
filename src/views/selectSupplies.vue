<template>
  <div class="selectSupplies">
    <selectMsg msg="Pack your supplies"/>
    <!-- <nextBtn v-if="goNext" redirectUrl="/"></nextBtn> -->
    <nextBtn redirectUrl="/openCamera"></nextBtn>
  </div>
</template>
<script>
import selectMsg from '@/components/selectMsg.vue'

import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'selectSupplies',
  components: {
    selectMsg,
    nextBtn
  },
  data() {
    return {
      goNext: false
    }
  },
}
</script>

<style scoped lang="scss">
</style>
