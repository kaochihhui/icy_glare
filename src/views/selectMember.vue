<template>
  <div class="selectMember">
    <selectMsg msg="Select your members"/>

    <nextBtn v-if="goNext" redirectUrl="/"></nextBtn>
  </div>
</template>
<script>
import selectMsg from '@/components/selectMsg.vue'

import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'selectMember',
  components: {
    selectMsg,
    nextBtn
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
  .poleBtn{
    p{
      font-size: 24px;
      border: 1px solid #fff;
      padding: 15px 30px;
      display: inline-block;
    }
  }
</style>
