<script setup>
import { loadFull } from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async (engine) => {
  await loadFull(engine);
  //   await loadSlim(engine);
};

const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container);
};
</script>

<template>
  <div>
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              //   quantity: 4,
              particles_nb: 1,
            },
          },
        },
        particles: {
          move: {
            direction: 'right',

            speed: 0.05,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 160,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },

          size: {
            value: 2,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
</template>
