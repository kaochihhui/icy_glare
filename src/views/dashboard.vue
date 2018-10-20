<template>
  <div class="dashboard">
    <div class="progressBar">
      <img src="../assets/dashboard/game-09.svg" alt="">
    </div>
    <div class="graySection">
      <div class="supplies">
        <img src="../assets/dashboard/game-10.svg" alt="">
        <p>supplies</p>
      </div>
      <div class="tempature">
        <img src="../assets/dashboard/game-11.svg" alt="">
        <p>23°C</p>
      </div>
      <div class="transport">
        <img src="../assets/dashboard/game-12.svg" alt="">
        <p>transport</p>
      </div>
      <div class="rowIC">
        <div class="leftColumn">
          <img src="../assets/dashboard/game-13.svg" alt="">
        </div>
        <div class="rightColumn">
          <img src="../assets/dashboard/game-14.svg" alt="">
        </div>
      </div>
      <div class="rowIC2">
        <div class="leftColumn">
          <img src="../assets/dashboard/game-15.svg" alt="">
        </div>
        <div class="rightColumn">
          <img src="../assets/dashboard/game-16.svg" alt="">
        </div>
      </div>
    </div>
    <h2>New status</h2>
    <div class="squares">
      <div class="qrcode">
        <img src="../assets/dashboard/game-17.svg" alt="">
      </div>
      <div class="event">
        <img src="../assets/dashboard/game-18.svg" alt="">
      </div>
    </div>
    <!-- <selectMsg msg="Pack your supplies"/> -->
    <!-- <nextBtn v-if="goNext" redirectUrl="/"></nextBtn> -->
    <!-- <nextBtn redirectUrl="/"></nextBtn> -->
  </div>
</template>
<script>
// import Vue from 'vue'

// console.log(QrcodeReader)

// import selectMsg from '@/components/selectMsg.vue'

// import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'dashboard',
  data() {
      return {
      }
  },

  methods: {

  }
}
</script>

<style scoped lang="scss">
.dashboard{
  padding-top: 50px;
  .progressBar{
    padding: 0 20px;
  }
  .graySection{
    background-color: rgba(255,255,255, 0.35);
    padding: 20px;
    img{
      width: 50px;
    }
    p{
      font-size: 12px;
    }
    .supplies,.tempature,.transport{
      display: inline-block;
      padding: 0 20px;
    }
    .tempature{
      border: 1px solid #fff;
      border-top: none;
      border-bottom: none;
    }
    .supplies{
      padding-left: 0;
    }
    .transport{
      padding-right: 0;
    }
    .rowIC{
      padding: 20px 0 0;
    }
    .rowIC2{
      padding: 10px 0 0;
    }
    .leftColumn,.rightColumn{
      display: inline-block;
      img{
        width: 120px;
      }
    }
    .leftColumn{
      margin-right: 10px;
    }
  }
  .squares{
    img{
      width: 100px;
    }
    .qrcode,.event{
      display: inline-block;
    }
  }
}
</style>
