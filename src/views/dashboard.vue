<template>
  <div class="dashboard">
    <div class="progressBar">
      <div class="progressBarbg"></div>
      <div class="progressBardiv"><p>38 days</p></div>
      <!-- <img src="../assets/dashboard/game-09.svg" alt=""> -->
    </div>
    <div class="graySection">
      <div class="supplies" @click="slideRight">
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
        <router-link to="/openCamera">
          <img src="../assets/dashboard/game-17.svg" alt="">
        </router-link>
      </div>
      <div class="event">
        <img src="../assets/dashboard/game-18.svg" alt="">
      </div>
    </div>
    <div v-if="drawerbtn" class="drawerBtn" @click="toggle">
      <img src="../assets/dashboard/game-19.svg" alt="">
    </div>
    <div v-if="drawerdownBtnbtn" class="drawerdownBtnbtn" @click="toggledown">
      <img src="../assets/dashboard/game-20.svg" alt="">
    </div>
    <!-- <SlideUpDown :active="active" ref="upDownEl">

      <div class="logSection">
        <virtualList :size="20" :remain="8" wtag="ul">
            <li class="item" v-for="(udf, index) of items" :key="index">Item: # {{ index }}</li>
        </virtualList>
      </div>

    </SlideUpDown> -->
    <div class="logGroup">
      <div class="logSection">
        <virtualList :size="20" :remain="8" wtag="ul">
            <li class="item" v-for="(udf, index) of items" :key="index">Item: # {{ index }}</li>
        </virtualList>
      </div>
    </div>

    <div class="suppliesList">
      <ul>
        <li>Thermal Socks</li>
        <li>Binoculars</li>
        <li>Kindle</li>
        <li>Daypack</li>
        <li>Head Torch</li>
        <li>Water Bottle</li>
      </ul>
    </div>


    <!-- <selectMsg msg="Pack your supplies"/> -->
    <!-- <nextBtn v-if="goNext" redirectUrl="/"></nextBtn> -->
    <!-- <nextBtn redirectUrl="/"></nextBtn> -->
  </div>
</template>
<script>
import virtualList from 'vue-virtual-scroll-list'
import SlideUpDown from 'vue-slide-up-down'
import $ from 'jquery'
// import Vue from 'vue'

// console.log(QrcodeReader)

// import selectMsg from '@/components/selectMsg.vue'

// import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'dashboard',
  data() {
      return {
        items: new Array(100000),
        active: false,
        questionText: null,
        drawerbtn: true,
        drawerdownBtnbtn: false,
        ifslideRight: true
      }
  },
  components: {
    virtualList,
    SlideUpDown
  },
  mounted () {
    const el = this.$refs.upDownEl.$refs.container
    el.addEventListener('transitionend', () => {
      // console.log('transition ended')
    })
  },

  methods: {
    toggle () {
      this.drawerbtn = !this.drawerbtn;
      this.drawerdownBtnbtn = !this.drawerdownBtnbtn;
      // $(".drawerdownBtnbtn").animate({
      //   bottom:"200px"
      // });
      $(".logGroup").animate({
        height:"200px"
      });
    },
    toggledown(){
      this.drawerbtn = !this.drawerbtn;
      this.drawerdownBtnbtn = !this.drawerdownBtnbtn;

      $(".logGroup").animate({
        height:"0"
      });
      // $(".drawerBtn").animate({
      //   bottom:"0"
      // });
    },
    slideRight(){
      if(this.ifslideRight){
        $(".suppliesList").animate({
          right:0
        });
        this.ifslideRight = !this.ifslideRight;
      }else{
        $(".suppliesList").animate({
          right:"-220px"
        });
        this.ifslideRight = !this.ifslideRight;
      }

    }
  },


}
</script>

<style scoped lang="scss">
.dashboard{
  padding-top: 20px;


  .progressBar{
    padding: 0 20px;
    position: relative;
    margin-bottom: 20px;
    .progressBardiv{
      height: 30px;
      width: 38%;
      background-color: green;
      position: absolute;
      top: 0;
      text-align: center;
    }
    .progressBarbg{
      height: 30px;
      width: 100%;
      background-color: #fff;
    }
    p{
      margin: 5px 0 0 0;
    }
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
        width: 130px;
      }
    }
    .leftColumn{
      margin-right: 10px;
    }
  }
  h2{
    margin: 10px 0;
  }
  .squares{
    img{
      width: 130px;
    }
    .qrcode,.event{
      display: inline-block;
    }
  }
  .drawerBtn{
    // position: absolute;
    // top: 0;
    width: 100px;
    // margin: 0 auto;
    margin-bottom: -5px;
    position: absolute;
    bottom: 0;

    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
  }
  .drawerdownBtnbtn{
    width: 100px;
    // margin: 0 auto;
    margin-bottom: -10px;
    position: absolute;
    bottom: 200px;

    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
  }
  .logGroup{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: #454868;
    .logSection{
      // position: absolute;
      // top: 0;

      // width: 100%;
    }
  }
  .suppliesList{
    position: absolute;
      width: 200px;
      height: 200px;
      font-size: 20px;
      right: -220px;
      top: 100px;
      padding: 0 10px 30px;
      background-color: #333;
      text-align: left;
  }
}
</style>
