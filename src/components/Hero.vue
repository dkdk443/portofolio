<template>
  <div class="hero">
    <img :src="pcImgPath" class="hero-img_lg">
    <img :src="smImgPath" class="hero-img_sm">
    <transition appear name="zoom">
      <h1 class="hero__title">Welcome to my portfolio!!</h1>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pcImgPath: '/static/images/pc_hero.png',
      smImgPath: '/static/images/phone_hero.png'
    }
  },
}
</script>

<style lang="scss">

.zoom-enter-active, .zoom-leave-active {
  transition: opacity 1s;
}

.zoom-enter, .zoom-leave-to  {
  opacity: 0;

}

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
