<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%; /* needed for container min-height */
}
html{
  background-image: url("./assets/pqbg.svg");
  background-size: cover;
  text-transform: uppercase;
  /* background-repeat: no-repeat; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #fff;
  /* margin-top: 60px; */
  position: relative; /* needed for footer positioning*/
  height: auto !important; /* real browsers */
  min-height: 100%; /* real browsers */
}
</style>
