<template>
  <div class="main-content" id="form">
    <div class="title-box">
      <div
        class="main-title"
        :style="{'background-color': bgColor, color: textColor}"
      > </div>
      <div class="text-center">
      </div>
      <div class="sub-title" :style="{color: bgColor}">K.D</div>
      <!-- <div class="color-box">
        <div id="color1" class="color" @click="changeColor1"></div>
        <div id="color2" class="color" @click="changeColor2"></div>
        <div id="color3" class="color"></div>
        <div id="color4" class="color"></div>
        <div id="color5" class="color"></div>
        <div id="color6" class="color"></div>
      </div> -->
      <p>ssssssss</p>
      <p>aaaaaaaaaaaaa</p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  el:'#form',
  data() {
    return {
      dialog: false,
      bgColor:'',
      textColor:'',
    }
  },
  methods: {
    changeColor1: function() {
      this.bgColor = '#08A5AE'
      this.textColor = 'white'
    },
    changeColor2: function() {

    },
    doAnimation: function(){

    }
  }
}
</script>

<style scoped>

  /* @keyframes toRight {
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
} */
/* @keyframes toLeft {
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
}*/


.main-content {
  padding: 12px;
  min-height: 100vh;
}

.main-title {
  animation-name: toRight;
  animation-duration: 2s;
  animation-timing-function: ease;
  font-size: 30px;
}

.sub-title {
  animation-name: toLeft;
  animation-duration: 2s;
  animation-timing-function: ease;
  font-size: 18px;
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
