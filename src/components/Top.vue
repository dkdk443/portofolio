<template>
  <div class="main-content">
    <div class="title-box">
      <div class="main-title">My Portfolio</div>
        <div class="text-center">
      </div>
      <div class="sub-title">Kana Demoto</div>
      <div class="color-box">
        <div id="color1" class="color"></div>
        <div id="color2" class="color"></div>
        <div id="color3" class="color"></div>
        <div id="color4" class="color"></div>
        <div id="color5" class="color"></div>
        <div id="color6" class="color"></div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
export default {
  data() {
    return {
      dialog: false,
    }
  }
}
</script>

<style scoped>

  @keyframes toRight {
  0% {
     opacity:0;
     transform: translateX(-100px); 
  }
  95% {
    transform: translateX(10px); 
  }
  100% {
    opacity: 1;
  }
}
@keyframes toLeft {
  0% {
     opacity:0;
     transform: translateX(100px); 
  }
  95% {
    transform: translateX(-10px); 
  }
  100% {
    opacity: 1;
  }
}

.main-content {
  /* background-image: url(../assets/images/neko-top.png); */
  background-size:cover;
  height: 100vh;
}
.title-box {
  margin: 32px 0;
  line-height: 160px;
  text-align: center;
  font-family: 'Baloo Tammudu 2', cursive;
 
  height: max-content;
  width: 100%;

  /* background-repeat: repeat-x; */
}
.main-title {
  animation-name: toRight;
  animation-duration: 2s;
  animation-timing-function: ease;
  font-size: 68px;
}

.sub-title {
  animation-name: toLeft;
  animation-duration: 2s;
  animation-timing-function: ease;
  font-size: 24px;
}

.color-box {
 display: grid;
 grid-template-rows: 50px 50px;
 grid-template-columns: 50px 50px 50px;
 position: fixed;
 left: 0;
 bottom: 0;
 margin: 8px;
}

#color1 {
    grid-row: 1 / 2;
    grid-column: 1 / 1;
    background-color: #08A5AE;
}

#color2 {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    background-color: #FFFE4B;
}

#color3 {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    background-color: #FA7D69;
}

#color4 {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color: #6C5420;
}

#color5 {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    background-color: #B28B48;
}

#color6 {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    background-color: #817684;
}


</style>