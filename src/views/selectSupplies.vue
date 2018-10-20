<template>
  <div class="selectRoute">
    <selectMsg msg="Pack your supplies"/>
    <div class="" v-for="">

    </div>
    <!-- <nextBtn v-if="goNext" redirectUrl="/"></nextBtn> -->
    <nextBtn redirectUrl="/"></nextBtn>
  </div>
</template>
<script>
import selectMsg from '@/components/selectMsg.vue'

import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'selectRoute',
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
