<template>
  <div>
    <ul class="nav">
    <li class="nav-item"
        v-for="(menu, index) in menus"
        :key="index"
        >
       <router-link
        :to="menu.path"
        class="nav-link active"
       >{{menu.title}}</router-link>
    </li>

  </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HeaderMenu',
  data () {
    return {
      menus:  [
        { title: 'はじめに'},
        {title: '私について', path: '/me', tips: '私について'},
        {title: 'スキル', path: '/skill', tips: 'できること'},
        {title: '作ったもの', path: '/work', tips: 'やったこと'},
        {title: '生い立ち', path: '/work', tips: 'やったこと'},
        {title: '連絡先', path: '/contact', tips: '連絡先'}
      ],
      hoverFlag:false,
      hoverIndex: null
    }
  },
  methods: {
    showTooltip(index) {
      this.hoverIndex = index
      this.hoverFlag = true
    },
    hideTooltip() {
      this.hoverFlag = false
    }
  }
}

</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  height: 40vh;
  padding: 8px 12px;
  font-size: 16px;
  position: absolute;
  top: 30;
  left: 0;
  width: 240px;
  z-index: 10;
  border-radius: 4px;
  filter: drop-shadow(2px 3px 3px #e4e4e4);
  .nav-item {
    font-size: 20px;
    list-style: none;
    padding: 2px;
    margin-left: 6px;
  }
}

</style>
