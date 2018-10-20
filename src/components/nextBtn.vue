<template>
  <div class="nextBtn">
    <router-link v-bind:to="redirectUrl">next</router-link>
  </div>
</template>

<script>
export default {
  name: 'nextBtn',
  props: {
    redirectUrl: null,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
  color: #fff;
  text-decoration: none;
  font-size: 28px;
}

</style>
