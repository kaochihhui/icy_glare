<template>
  <div class="openCamera">
    <QrcodeReader @decode="onDecode"></QrcodeReader>

    <!-- <selectMsg msg="Pack your supplies"/> -->
    <!-- <nextBtn v-if="goNext" redirectUrl="/"></nextBtn> -->
    <!-- <nextBtn redirectUrl="/"></nextBtn> -->
  </div>
</template>
<script>
import Vue from 'vue'
import { QrcodeReader } from 'vue-qrcode-reader'

// import selectMsg from '@/components/selectMsg.vue'

// import nextBtn from '@/components/nextBtn.vue'

export default {
  name: 'openCamera',
  components: {
    QrcodeReader

  },
  data() {
      return {
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
    onDecode (decodedString) {
      alert(decodedString);
      // ...
    }
  }
}
</script>

<style scoped lang="scss">
</style>
