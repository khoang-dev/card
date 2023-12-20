<template>
  <div class="container">
    <!-- <SnowComponent/> -->
    <AnimatedChristmasCard/>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import SnowGlobe from './components/SnowGlobe.vue';
import AnimatedChristmasCard from './components/AnimatedChristmasCard.vue';
// import SnowComponent from './components/SnowComponent.vue';
// const bg = require('../public/bg.jpg')

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.container {
  width: 100vw;
  height: 100vh;
  background-image: url('../public/bg.jpg')
}
.card {
  display: flex;
}
</style>
