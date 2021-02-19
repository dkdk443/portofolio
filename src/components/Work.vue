<template>
  <div>
    <div class="row">
      <div class="col" v-for="(card, index) in cards" :key="index">
        <div class="card" style="width: 18rem;" >
          <img :src="card.src" class="card-img-top" alt="">
        <div class="card-body">
          
          <h5 class="card-title">{{card.title}}</h5>
          <p class="card-text">{{card.body}}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards:[
        {
          src:'/static/images/js-logo.png',
          title:'title',
          body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
         {
          src:'/static/images/js-logo.png',
          title:'title',
          body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
          src:'/static/images/js-logo.png',
          title:'title',
          body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
          src:'/static/images/js-logo.png',
          title:'title',
          body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },

      ]
    }
  },
}
</script>

<style scoped>
  img {
    width: 250px;
  }
</style>

