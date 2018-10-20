<template>
  <div class="home">
    <img src="@/assets/logo-quest.svg" alt="">
    <!-- <p>POLAR QUEST</p> -->
    <div class="startBtn">
      <router-link to="/NorthOrSouth">START</router-link>
    </div>
    <div class="bag_background"></div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="POLAR QUEST"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style scoped lang="scss">
  .home{
    padding-top: 40%;
    img{
      width: 200px;
    }
    p{
      font-size: 32px;
    }
    .startBtn{
      margin-top: 20%;

      a{
        color: #fff;
        text-decoration: none;
        border: 1px solid #fff;
        padding: 10px 20px;
        font-size: 24px;
      }
    }
    .bag_background{
      background-image: url("../assets/bag_bg.svg");
      height: 300px;
      background-position: bottom center;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-size: cover;
    }
  }
</style>
