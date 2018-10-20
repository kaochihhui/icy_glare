<template>
  <div class="selectSupplies">
    <selectMsg msg="Pack your supplies"/>
    <div class="listGroup">
      <div class="listElement">Waterproof Jacket</div>
      <div class="listElement">Thermal Socks</div>
      <div class="listElement">Hiking Boots</div>
      <div class="listElement">UV Sunglasses</div>
      <div class="listElement">Thermal Headband</div>
      <div class="listElement">Binoculars</div>
      <div class="listElement">Medications</div>
      <div class="listElement">Kindle</div>
      <div class="listElement">Daypack</div>
      <div class="listElement">Warm Fleece</div>
      <div class="listElement">Camera</div>
      <div class="listElement">Tripod</div>
      <div class="listElement">Face Scarf</div>
      <div class="listElement">Head Torch</div>
      <div class="listElement">Sunscreen</div>
      <div class="listElement">Water Bottle</div>
    </div>

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
.listGroup{
  height: 450px;
  overflow: auto;
  margin-bottom: 50px;

  .listElement{
    font-size: 24px;
    background-color: rgba(255,255,255, 0.35);
    margin-bottom: 30px;
    padding: 10px 0;
  }

}

</style>
