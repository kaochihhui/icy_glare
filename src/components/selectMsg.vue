<template>
  <div class="selectMsg">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'selectMsg',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  p{
    font-size: 28px;
  }

</style>
