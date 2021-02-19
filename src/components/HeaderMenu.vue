<template>
  <div>
    <ul class="header-menu">
    <li class="nav-item"
        v-on:mouseover="showTooltip(index)"
        v-on:mouseleave="hideTooltip(index)"
        v-for="(menu, index) in menus"
        :key="index"
        v-show="isShow">
       <span v-if="hoverFlag && index === hoverIndex" class="tips">{{menu.tips}}</span>
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
      isShow:false,
      menus:  [
        {title: 'me', path: '/me', tips: '私について'},
        {title: 'skill', path: '/skill', tips: 'できること'},
        {title: 'work', path: '/work', tips: 'やったこと'},
        {title: 'contact', path: '/contact', tips: '連絡先'}
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

*{
  font-family: 'Baloo Tammudu 2', cursive;
  font-weight: 400;
}


ul {
  display: flex;
}

li {
  list-style: none;

}
a {
  /* animation-name: show; */
  animation-duration: 3s;
}

.header-menu {
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
  height: 40vh;
  padding: 8px 12px;
  font-size: 16px;
  position: absolute;
  top: 30;
  left: 0;
  width: 240px;
  z-index: 10;
}

.nav-item {

}

.weather {
  width: 200px;
}

@keyframes rumble {
  0%	{transform: translateY(0px);}

	30%	{transform: translateY(-10px);}

  100% {transform: translateY(0px);}

}


@keyframes show {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
