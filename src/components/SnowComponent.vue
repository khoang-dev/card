<template>
  <vue-particles
  id="tsparticles"
  :particlesInit="particlesInit"
:options="{
  fpsLimit: 400,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: false,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      enable: false,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'bottom',
      enable: true,
      random: false,
      speed: 2,
      straight: false,
      out_mode: 'out',
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 400,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: 'circle',
      stroke: {
      width: 0,
      color: '#000000'
      }
    },
    size: {
      random: true,
      value: { min: 3, max: 7 },
    },
  },
  detectRetina: true,
}"
  />
</template>

<script setup lang="ts">
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async (engine: any) => {
//await loadFull(engine);
await loadSlim(engine);
};

</script>

<style lang="css" scoped>
/* @import url('https://fonts.googleapis.com/css?family=Mountains+of+Christmas'); */

.snow {
position: absolute;
z-index: 10000;
width: 100%;
height: 100%;
}

</style>