<template>
  <div class="to-top-button" @click="scrollToTop()">
    <i class="fas fa-caret-up fa-3x"></i>
  </div>
</template>

<script>
export default {
  name:'ScrollToTop',
  methods: {
    scrollToTop() {
      window.scroll({
        top:0,
        behavior: "smooth"
      });
    }
  },
}
</script>

<style scoped lang="scss">
  .to-top-button {
    background-color: rgba(233, 233, 233, 0.665);
    width: 60px;
    height: 60px;
    border-radius: 10px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    .fas {
      color: #fdc44f;
    }

  }

</style>
