<template>
  <div class="selectRoute">
    <selectMsg msg="Select a route"/>
    <oneRoute rName="route1" v-bind:starCount="1" @click.native="goNext = true"/>
    <oneRoute2 rName="route2" v-bind:starCount="2" @click.native="goNext = true"/>
    <oneRoute3 rName="route3" v-bind:starCount="3" @click.native="goNext = true"/>
    <oneRoute4 rName="route4" v-bind:starCount="4" @click.native="goNext = true"/>
    <oneRoute5 rName="route5" v-bind:starCount="5" @click.native="goNext = true"/>
    <nextBtn v-if="goNext" redirectUrl="/selectMember"></nextBtn>
  </div>
</template>
<script>
import selectMsg from '@/components/selectMsg.vue'
import oneRoute from '@/components/oneRoute.vue'
import oneRoute2 from '@/components/oneRoute2.vue'
import oneRoute3 from '@/components/oneRoute3.vue'
import oneRoute4 from '@/components/oneRoute4.vue'
import oneRoute5 from '@/components/oneRoute5.vue'
import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'selectRoute',
  components: {
    selectMsg,
    oneRoute,
    oneRoute2,
    oneRoute3,
    oneRoute4,
    oneRoute5,
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
