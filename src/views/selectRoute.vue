<template>
  <div class="selectRoute">
    <selectMsg msg="Select a route"/>
    <oneRoute rName="route1" v-bind:starCount="4" @click.native="goNext = true"/>
    <oneRoute rName="route2" v-bind:starCount="3" @click.native="goNext = true"/>
    <oneRoute rName="route3" v-bind:starCount="2" @click.native="goNext = true"/>
    <oneRoute rName="route4" v-bind:starCount="1" @click.native="goNext = true"/>
    <nextBtn v-if="goNext" redirectUrl="/selectMember"></nextBtn>
  </div>
</template>
<script>
import selectMsg from '@/components/selectMsg.vue'
import oneRoute from '@/components/oneRoute.vue'
import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'selectRoute',
  components: {
    selectMsg,
    oneRoute,
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
  .poleBtn{
    p{
      font-size: 24px;
      border: 1px solid #fff;
      padding: 15px 30px;
      display: inline-block;
    }
  }
</style>
