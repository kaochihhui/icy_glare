<template>
  <div class="openCamera">
    <QrcodeReader
      @decode="onDecode"
      @init="onInit">
      <div class="decoded-content">{{ content }}</div>

      <LoadingIndicator v-show="loading" />
    </QrcodeReader>
    <br><br>
    <!-- <selectMsg msg="Pack your supplies"/> -->
    <!-- <nextBtn v-if="goNext" redirectUrl="/"></nextBtn> -->
    <nextBtn redirectUrl="/dashboard"></nextBtn>
  </div>
</template>
<script>
// import Vue from 'vue'
import { QrcodeReader } from 'vue-qrcode-reader'
import InitHandler from '@/mixins/InitHandler'

// console.log(QrcodeReader)

// import selectMsg from '@/components/selectMsg.vue'

import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'openCamera',
  components: {
    QrcodeReader,
    nextBtn
  },
  mixins: [ InitHandler ],
  data() {
      return {
        content: ''
          // video: {},
          // canvas: {},
          // captures: []
      }
  },
  // mounted() {
  //     this.video = this.$refs.video;
  //     if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //         navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  //             this.video.src = window.URL.createObjectURL(stream);
  //             this.video.play();
  //         });
  //     }
  // },
  methods: {
    onDecode (content) {
      this.content = content
    }
    // onDecode (decodedString) {
    //   alert(decodedString);
    //   // ...
    // }
  }
}
</script>

<style scoped lang="scss">
</style>
