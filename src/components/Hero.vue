<template>
  <div class="hero">
    <img src="/static/images/pc_hero.png" class="hero-img_lg">
    <img src="/static/images/phone_hero.png" class="hero-img_sm">
      <h1 class="hero__title"
      >Welcome to my portfolio!!</h1>
  </div>
</template>

<style lang="scss">
.hero-img_lg {
    display: none;
}
@media screen and (min-width:480px) {
  .hero-img_lg {
    display: none;
  }
}
@media screen and (min-width:768px) and ( max-width:1024px) {
  .hero-img_lg {
    display: none;
  }
}
@media screen and (min-width:1024px) {
  .hero-img_sm {
    display: none;
  }
  .hero-img_lg {
    display: block;
    width: 100vw;
    object-fit: cover;
  }
    .hero {
    &__title {
      margin-top: 60px;
    }
  }

}
.hero {
   position: relative;
   display: flex;
   justify-content: center;
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
