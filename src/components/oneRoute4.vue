<template>
  <div class="oneRoute">
    <div class="routeIcon">
      <img src="../assets/icon-pint.svg" alt="">
    </div>
    <div class="routeName">{{rName}}</div>
    <div class="routeStar">
      <img src="../assets/star-yellow.svg" alt="">
      <img src="../assets/star-yellow.svg" alt="">
      <img src="../assets/star-yellow.svg" alt="">
      <img src="../assets/star-yellow.svg" alt="">
      <img src="../assets/star-white.svg" alt="">
    </div>

  </div>
</template>

<script>


export default {
  name: 'oneRoute',
  props: {
    rName: String,
    starCount: Number
  },
  methods: {
    produceImg(starCount) {
      let tmpstring="";
      for(let i=0;i<5;i++){
        if(i == starCount-1){
          // tmpstring+='<img width="100px" height="100px" src="/img/star-white.svg" alt="">';
          tmpstring+=`<img width="100px" height="100px" src="@/assets/star-white.svg" alt="">`;
        }else{
          tmpstring+=`<img width="100px" height="100px" src="@/assets/star-yellow.svg" alt="">`;
        }
      }
      return tmpstring
      // console.log(string);
    }
  },
  mounted () {
    // console.log(this.starCount);

  },
}
</script>

<style scoped lang="scss">
.oneRoute{
  position: relative;
  margin-bottom: 30px;
  height: 40px;
  background-color: rgba(255,255,255, 0.35);
  padding: 10px 0px 0px;

  .routeIcon{
    display: inline-block;
    position: absolute;
    left: 20px;
    img{
      width: 20px;
    }
  }
  .routeName{
    display: inline-block;
    font-size: 24px;
    position: absolute;
    left: 60px;
  }
  .routeStar{
    display: inline-block;
    position: absolute;
    right: 20px;
    img{
      width: 30px;
    }
  }
}

</style>
