<template>
  <div class="hero">
      <img src="/static/images/phone_hero.png" class="hero-img_sm">
      <h1 class="hero__title">Welcome to my portfolio!!</h1>
  </div>
</template>

<style lang="scss">
.hero {
   position: relative;
   &__title {
     position: absolute;
     top: 62%;
     text-align: center;
     font-size: 42px;
   }
  .hero-img_sm {
  width: 100%;
  z-index: -10;
  }
}
</style>
