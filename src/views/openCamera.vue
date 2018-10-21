<template>
  <div class="openCamera">
    <QrcodeReader
      @decode="onDecode"
      @init="onInit">
      <div class="decoded-content">
        {{ content }}
        <!-- <a :href="'/quesiton/' + content">{{ content }}</a> -->
      </div>

      <LoadingIndicator v-show="loading" />
    </QrcodeReader>
    <br><br>
    <!-- <selectMsg msg="Pack your supplies"/> -->
    <!-- <nextBtn v-if="goNext" redirectUrl="/"></nextBtn> -->
    <!-- <p>question</p>
    <div>button1</div>
    <div class="" v-if="button2!=null">{{ button2 }}</div>
    <div class="" v-if="button3!=null">{{ button3 }}</div>
    <div class="" v-if="button4!=null">{{ button4 }}</div> -->
    <nextBtn redirectUrl="/dashboard"></nextBtn>
  </div>
</template>
<script>
// import Vue from 'vue'
import { QrcodeReader } from 'vue-qrcode-reader'
import InitHandler from '@/mixins/InitHandler'
import $ from 'jquery'

// console.log(QrcodeReader)

// import selectMsg from '@/components/selectMsg.vue'

import nextBtn from '@/components/nextBtn.vue'
let my_site= "http://phillipsyang.ddns.net:5000/api/";
export default {
  name: 'openCamera',
  components: {
    QrcodeReader,
    nextBtn,
  },
  mixins: [ InitHandler ],
  data() {
      return {
        content: '',
        question: null,
        button1: null,
        button2: null,
        button3: null,
        button4: null,
          // video: {},
          // canvas: {},
          // captures: []
      }
  },
  mounted() {
    // localStorage.setItem('question', this.content);
      // this.video = this.$refs.video;
      // if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      //     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      //         this.video.src = window.URL.createObjectURL(stream);
      //         this.video.play();
      //     });
      // }
  },
  methods: {
    onDecode (content) {
      this.content = content

      // $.ajax({
      //   method: "POST",
      //   url: "/question/"+content,
      // }).done(function( msg ) {});
      $.ajax({
        type: "GET",
        url: my_site + "question/" + content,
        success: function(data){
          // alert(data.id);
          localStorage.setItem('question', data.description);
          localStorage.setItem('button1', data.answer[0]);
          localStorage.setItem('button2', data.answer[1]);
          localStorage.setItem('button3', data.answer[2]);
          localStorage.setItem('button4', data.answer[3]);
          // this.question = data.description;
          // this.button1 = data.answer[0];
          // this.button2 = data.answer[1];
          // this.button3 = data.answer[2];
          // this.button4 = data.answer[3];
          // $(".openCamera").append("<p>"+this.question+"</p><div>"+this.button1+"</div><div>"+this.button2+"</div><div>"+this.button3+"</div><div>"+this.button4+"</div>");
          // localStorage.setItem('question', data.description);
            // $('#data-target').html(data_details.data1+ "\n" +data_details.data2+ "\n" +data_details.data3);
        }
      })

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
