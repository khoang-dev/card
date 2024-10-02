<template>
  <div class="container">
    <SnowGlobe/>
    <AnimatedChristmasCard
      v-if="!fireworks && !protect"
      @click-gift="fireworks = true"
    />
    <SnowComponent v-if="!fireworks" />
    <FireworkComponent v-if="fireworks" />
    <div class="protect" v-if="protect">
      <img src="../public/giphy.gif" style="width: 200px;margin-top: 5vh;"/>
      <div class="protect-text">Please enter your code:</div>
      <v-otp-input
        ref="otpInput"
        v-model:value="code"
        input-classes="otp-input"
        separator="-"
        :num-inputs="6"
        :should-auto-focus="true"
        input-type="password"
        :conditionalClass="['one', 'two', 'three', 'four']"
        @on-complete="handleOnComplete"
      />
      <div class="incorrect-text" v-if="incorrect">Code is incorrect</div>
    </div>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import SnowGlobe from './components/SnowGlobe.vue';
import { ref, watch } from "vue";
import AnimatedChristmasCard from "./components/AnimatedChristmasCard.vue";
import SnowComponent from "./components/SnowComponent.vue";
import FireworkComponent from "./components/FireworkComponent.vue";
import VOtpInput from "vue3-otp-input";
// const bg = require('../public/bg.jpg')

const fireworks = ref<boolean>(false);
const code = ref();
const protect = ref(true);
const incorrect = ref(false);

watch(fireworks, () => {
  if (fireworks.value) {
    setTimeout(() => (fireworks.value = false), 5000);
  }
});
const handleOnComplete = (value: string) => {
  protect.value = value !== "210323";
  incorrect.value = protect.value;
  console.log(value);
};

watch(incorrect, () => {
  if (incorrect.value) {
    setTimeout(() => (incorrect.value = false), 2000);
  }
});
</script>

<style lang="css">
.container {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  background-image: url("../public/green-leaf-tree-iphone-14.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-top: 60px; */
}
.card {
  display: flex;
}

.protect {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.9;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 4vh;

  /* padding-top: 100px; */
}
.protect-text {
  font-size: 20px;
  color: white;
  margin-top: 4vh;
}
.incorrect-text {
  color: red;
  font-size: 20px;
}
.otp-input {
  width: 20px;
  height: 20px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
