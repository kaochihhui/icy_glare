<template>
  <div class="home">
    <p>POLAR QUEST</p>
    <div class="startBtn">
      <router-link to="/NorthOrSouth">START</router-link>
    </div>
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
    padding-top: 50%;
    p{
      font-size: 32px;
    }
    .startBtn{
      margin-top: 20%;

      a{
        color: #fff;
        text-decoration: none;
        border: 1px solid #fff;
        padding: 15px 30px;
      }
    }
  }
</style>
