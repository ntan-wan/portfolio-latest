<script setup>
import CustomParticles from '@/components/CustomParticles.vue';
import imgHero from '@/assets/imgs/bg-hero.svg';
import imgAvatar from '@/assets/imgs/avatar.svg';
</script>

<template>
  <div class="page-home">
    <CustomParticles />
    <section class="section-hero">
      <CustomContainer>
        <div class="grid">
          <div
            class="col-12 md:col-7 pl-5 flex flex-column align-items-left justify-content-center"
          >
            <h1 class="text-white text-5xl font-medium">
              Hi There!
              <span class="wave-custom" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 class="mt-4 text-white text-6xl font-medium">
              I am <span class="text-primary font-semibold">Wang</span>
            </h1>
            <VueWriter
              :array="['Frontend Developer', 'Creative', 'Detail-oriented']"
              :eraseSpeed="50"
              :typeSpeed="120"
              :intervals="200"
              caret="cursor"
              class="mt-4 text-6xl font-semibold text-primary"
            />
          </div>
          <div
            class="col-12 md:col-5 flex align-items-center justify-content-center"
          >
            <img class="max-w-full" :src="imgHero" width="450" alt="coder" />
          </div>
        </div>
      </CustomContainer>
    </section>

    <section class="section-introduction">
      <CustomContainer>
        <div class="grid">
          <div
            class="col-12 md:col-7 flex flex-column align-items-left justify-content-center"
          >
            <h1 class="text-white text-5xl font-medium">
              LET ME <span class="text-primary">INTRODUCE</span> MYSELF
            </h1>
            <p class="text-white text-xl font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure recusandae qui et facilis. Quis recusandae
              quam deserunt ullam exercitationem.
            </p>
          </div>
          <div
            class="col-12 md:col-5 flex align-items-center justify-content-center"
          >
            <img class="max-w-full" width="217" :src="imgAvatar" alt="avatar" />
          </div>
          <div
            class="col-12 flex flex-column gap-3 justify-content-center align-items-center"
          >
            <div class="">
              <h2 class="text-white text-5xl font-medium">FIND ME ON</h2>
              <p class="text-white text-center mt-2">
                Feel free to
                <span class="text-primary">connect</span> with me
              </p>
              <div class="mt-5 flex gap-2 justify-content-between">
                <Button text rounded icon="pi pi-github " />
                <Button text rounded icon="pi pi-twitter " />
                <Button text rounded icon="pi pi-linkedin" />
                <Button text rounded icon="pi pi-instagram" />
              </div>
              <!-- <Button text rounded icon="pi pi-github" /> -->
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
    <CustomFooter />
  </div>
</template>

<style scoped lang="scss">
.section-hero {
  min-height: 100vh;
  background-image: var(--image-gradient), url('@/assets/imgs/bg-home.png');
  background-position: top center;
  background-repeat: no-repeat;
  padding-top: calc($navbar-height + 50px);
}
.section-introduction {
  min-height: 100vh;
  padding-top: calc($navbar-height + 50px);
}
</style>
