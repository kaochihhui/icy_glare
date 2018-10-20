<template>
  <div class="selectMember">
    <selectMsg msg="Select your members"/>
    <div v-for="member in member_data" class="member" @click="goNext = true">
      <p>{{ member.name }}</p>
      <p>{{ member.secretIdentity }}</p>
      <!-- <img class="none" src="@/assets/logo.png" alt=""> -->
    </div>
    <nextBtn v-if="goNext" redirectUrl="/selectSupplies"></nextBtn>
    <!-- <pre>{{ member_data }}</pre> -->
  </div>
</template>
<script>
import selectMsg from '@/components/selectMsg.vue'

import nextBtn from '@/components/nextBtn.vue'

import axios from 'axios'

export default {
  name: 'selectMember',
  components: {
    selectMsg,
    nextBtn
  },
  data() {
    return {
      member_data: null,
      goNext: false,
      ifclicked: false,
      countclicked: 0,
    }
  },
  mounted () {
    axios
      .get('/api/member.json')
      .then(response => (this.member_data = response.data.members))
  },
  methods: {
    markUser(target){
      console.log(target.classList);
    },
    selectthis(){
      this.countclicked++;
      // console.log(this.countclicked);
      if(this.countclicked<5) this.ifclicked=true;
    }

  },
}
</script>

<style scoped lang="scss">
  .member{
    background-color: gray;
  }
  .none{
    display: none;
  }
</style>
