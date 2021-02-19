<template>
    <div class="weather">
        <select name="city" id="city" v-model="city" @change="updateWheather">
          <option value="tokyo">東京</option>
          <option value="hiroshima">広島</option>
        </select>
        <span>の天気</span>
        <!-- <div class="icon" v-on:click="funfun()">icon</div> -->
        <div class="icon-txt">
          <div class="weather-name">晴</div>
          <div class="temp">
            <div class="temp-box">
              <div class="temp-box-top">最低気温</div>
              <div class="temp-box-btm">{{ Math.round(wheather.main.temp_min - 273)}}℃</div>
            </div>
            <div class="temp-box">
              <div class="temp-box-top">最高気温</div>
              <div class="temp-box-btm">{{ Math.round(wheather.main.temp_max - 273) }}℃</div>
            </div>

          </div>
        </div>
      </div>
</template>

<script>


export default {
  data (){
    return {
      wheather: null,
      city: 'tokyo'
    }
  },
  methods: {
    updateWheather() {
      const apiKey = 'b8a23a3fea61ff6a7c403e5c77f238ae';
    let cityName = this.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios
      .get(url)
      .then((result) => {
        this.wheather = result.data
        console.log(this.wheather)
      }).catch((err) => {
        
      });
    }

  },
  mounted() {
    const apiKey = 'b8a23a3fea61ff6a7c403e5c77f238ae';
    let cityName = this.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios
      .get(url)
      .then((result) => {
        this.wheather = result.data
        console.log(this.wheather)
      }).catch((err) => {
        
      });
  },
}
</script>

<style scoped>
span {
  font-size: 12px;
}
  .temp {
  display: flex;
}

.temp-box {
  padding: 4px;
  align-items: center;
}
.temp-box-top {
  font-size: 8px;
}

</style>