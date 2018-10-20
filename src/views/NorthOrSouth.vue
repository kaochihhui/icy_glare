<template>
  <div class="northORsouth">
    <img src="../assets/maptool.svg" alt="">
    <selectMsg msg="Select your destination"/>
    <div class="poleBtn"><router-link to="/selectRoute">North Pole</router-link></div>
    <div class="poleBtn"><router-link to="/selectRoute">South Pole</router-link></div>
  </div>
</template>

<script>
import selectMsg from '@/components/selectMsg.vue'

export default {
  name: 'northORsouth',
  components: {
    selectMsg
  }
}
</script>

<style scoped lang="scss">
  img{
    width: 200px;
    margin-top: 20%;
  }
  .poleBtn{
    background-color: rgba(255,255,255, 0.35);
    margin-bottom: 50px;
    padding: 20px 0px;

    a{
      color: #fff;
      text-decoration: none;
      font-size: 24px;
      // border: 1px solid #fff;
      // padding: 15px 30px;
      // display: inline-block;
    }
  }
</style>
