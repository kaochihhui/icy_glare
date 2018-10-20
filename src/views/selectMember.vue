<template>
  <div class="selectMember">
    <selectMsg msg="Select your members"/>
    <div class="memberGroup">
      <div v-for="member in member_data" class="member" @click="goNext = true">
        <!-- <img :src="getImgUrl(member.img)" alt=""> -->
        <img src="../assets/members/members-07.svg" alt="">
        <div class="memberText">
          <h3>{{ member.name }}</h3>
          <p>{{ member.secretIdentity }}</p>
        </div>
        <!-- <img class="none" src="@/assets/logo.png" alt=""> -->
      </div>
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
    getImgUrl(url) {
      return 'assets/members/' +url;
    },
    markUser(target){
      // console.log(target.classList);
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
.selectMember{
  p,h3{
    margin:0;
  }
  img{
    width: 50px;
    position: absolute;
    left: 30px;
  }
  .memberGroup{
    height: 450px;
    overflow: auto;
  }
  .member{
    background-color: rgba(255,255,255, 0.35);
    margin-bottom: 30px;
    padding: 10px 0;
    position: relative;
  }
  .none{
    display: none;
  }
}

</style>
