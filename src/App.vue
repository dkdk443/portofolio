<template>
  <div id="app">
    <header>
      <div class="header-top">
        <div class="icon-menu">
           <i class="fas fa-bars fa-2x"
            @click="showMenu = !showMenu"
        ></i>
        </div>
         <!-- <wheather></wheather> -->
      </div>
    </header>
    <transition name="fade">
       <header-menu class="header-menu" v-show="showMenu" @closeMenu="closeMenu"></header-menu>
    </transition>
    <hero></hero>
    <div>
    <div class="inner_content">
      <div class="inner_content__box me" id="me">
        <h2>私について</h2>
        <hr>
        <div class="me-img">
          <img src="/static/images/cat-icon.png" alt="" width="100px">
          <div class="me__title">
            <span class="label">職種</span>エンジニア（JavaScript, Vue.js, PHP, Laravel）
            プロジェクトマネージャー
          </div>
        </div>
        <div class="texts">
          <div class="keywords">
            <div class="label">キーワード</div>
            食　小売業　飲食業　システム　デジタル・DX　プロジェクト管理 　資料作成　動画編集
          </div>
          <ul>
            <li>K.D / 1995年生まれ / 広島県出身</li>
            <li>大学時代に懐石料理店でアルバイトをしたことをきっかけに、<strong>「食」</strong>に興味を持ち、大学卒業後スーパーマーケットに就職しました。スーパーでは接客や売り場作り、レジ業務、発注業務などを行い、食品の加工技術を向上させることに専念しました。</li>
            <li>消費者と最も近い場所で食に関わることにやりがいを覚える一方で、デジタル化が進んでいない小売業の現場に疑問を抱くようになりました。</li>
            <li>当時の会社は<strong>消費者</strong>を非常に大切にしていました。それゆえに、そこで働く人が長時間労働で<strong>疲弊</strong>していくのを見てきました。それをどうすることもできず、無力感を覚えるようになりました。</li>
            <li>ある日偶然見ていた動画をきっかけに<strong>「プログラミングを勉強したい！」</strong>と強く思い、プログラミングを学ぶため単身上京しました。</li>
            <li>３ヶ月ほどプログラミングスクールでプログラミングの基礎を学び、2019/8より都内の飲食店向けのSaaSを提供するベンチャー企業にカスタマーサポートとして入社しました。</li>
            <li>現在は開発チームに異動し、PMとして<strong>開発プロジェクトを管理</strong>したり、お客様の要望を整理して<strong>仕様を検討・開発資料を作成</strong>したりしています。</li>
            <li><strong>動画編集</strong>もしたりします。</li>

            <li>趣味は日本酒を飲んだり美味しいものを食べることです。冬場は編み物をして過ごします。</li>
            <li>猫が好きです。</li>
          </ul>
          詳細はnoteで
          <a href="https://note.com/dkdkd444/n/n513aba2b8d41" target="_blank">
             <img src="/static/images/logo-note.png" alt="" width="240px">
          </a>
        </div>
      </div>
      <skill></skill>
      <div class="inner_content__box" id="work">

        <h2>作ったもの</h2>
        <hr>
        <a href="">
          <img src="/static/images/ruijinen-banner.png" alt="人間関係を円滑にする類人猿分類" width="100%">
        </a>
        <div>
          <p>Vue.js/Vue CLI/Firebase</p>
          <p></p>
        </div>
      </div>
      <div class="inner_content__box" id="background">
        <h2>生い立ち</h2>
        <hr>
        <ul class="timeline">
          <li class="timeline__list">
            <span>1995</span>
            <div class="timeline__content">sss</div>
          </li>
        </ul>

      </div>
       <div class="inner_content__box" id="contact">
        <h2>連絡先</h2>
        <hr>
        <form action="">
          <label for="email">メールアドレス</label>
          <input type="email" name="email" id="email" placeholder="***@mail.com">
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
          <input type="button" value="送信！">
        </form>

      </div>
    </div>
  </div>
    <scroll-to-top></scroll-to-top>
      <!-- <my-button>Default</my-button> -->
      <!-- <router-view></router-view> -->

      <!--  -->



  </div>

</template>


<script>
/* eslint-disable */
import HeaderMenu from './components/HeaderMenu'
import ScrollToTop from './components/ScrollToTop'
import TimeLine from './components/TimeLine'
import Wheather from './components/Wheather'
// import '@fortawesome/fontawesome-free'
// import ElementUI from 'element-ui'
import Hero from './components/Hero'
import Contents from './components/Contents'
import Skill from './components/Skill'

export default {
  name: 'App',
  components: {
    HeaderMenu,
    ScrollToTop,
    TimeLine,
    Wheather,
    Hero,
    Contents,
    Skill
  },
  data () {
    return {
      greeting: '時間帯で挨拶が切り替わる',
      showMenu: false
    }

  },
  methods: {
     funfun: function() {
        alert('funfun')
      },
      closeMenu() {
        this.showMenu = false;
      }
  }
}

</script>


<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.icon-menu {
  display: block;
}
.icon-back {
  display: none;
}

@media screen and (min-width:480px) {
  #app {

  }

}

@media screen and (min-width:1024px) {
  .inner_content {
    margin: 0 auto;
    width: 800px;
    &__box {
      background-color: #fff;
      border-radius: 12px;
      margin: 32px 0;
    }
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;
  margin:0;
  box-sizing: border-box;
  position: relative;

}

*{
  font-family: 'Baloo Tammudu 2', cursive;
  font-weight: 400;
}

header {
  height: 60px;
  padding: 8px;
}



.header-menu a {
  padding: 0 32px;
  width: 100%;

}

.header-top {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

a:visited {
  color:black;
}

.main-content {
  animation-name: show-animation;
  animation-duration: 1s;

}
.main-content {
  width: 100%;
}
.inner-content {
  margin: 0 auto;
  width: 1000px ;
}

.page-title {
  animation-name: show-animation;
  animation-duration: 1s;
  margin-bottom: 20px;
  font-family: 'Baloo Tammudu 2', cursive;
}

@media screen and (min-width:480px) {
  .inner_content {
    padding: 0 30px;
    &__box {
      min-height: 100vh;
    }
    p {
      font-size: 14px;
    }

    .me-img {
      display: flex;
      justify-content: center;
      img {
        width: 220px;
      }
    }
  }
}

@media screen and (min-width:1024px) {
  .inner_content {
    padding: 0 30px;
    &__box {
      padding: 40px;
    }
    p {
      font-size: 14px;
    }

    .me-img {
      justify-content: center;
      img {
        width: 300px;
      }
    }
}
}
.inner_content {
  padding: 0 30px;
  &__box {
    min-height: 100vh;
  }
  p {
    font-size: 14px;
  }

  .me-img {
    img {
      width: 220px;
    }
  }
}
.me {
  &__title {
    padding: 12px;
    font-weight: bold;
    .label {
      font-size: 22px;
      font-weight: bold;
      background-color: #595050;
      color: white;
      padding: 2px 10px;
      margin: 8px auto;
      display: block;
      border-radius: 8px;
      text-align: center;
      padding-top: 10px;

    }
  }
}


h2 {
  font-size: 24px;
  font-weight: bold;
}

.keywords {
  border: #fdc44f solid 3px;
  border-radius: 4px;
  padding: 10px;
  margin: 20px;
  .label {
    font-weight: bold;
  }

}

.texts {
  ul {
    font-size: 16px;
    list-style: none;
    padding: 10px;
    li {
      line-height: 1.8em;
      padding-bottom: 8px;
    }
  }
}

#work {
  h3 {
    font-size: 20px;
  }
}

#background {
  .timeline {
    &__content {
      background-color: #e2dddd;
      padding: 20px;
      margin-left: 32px;
      border-radius: 8px;
    }
  }
  }

















#app {
  min-height: 100vh;
}
/*!
 * ress.css • v2.0.4
 * MIT License
 * github.com/filipelinhares/ress
 */

/* # =================================================================
   # Global selectors
   # ================================================================= */

   html {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
    word-break: normal;
    -moz-tab-size: 4;
    tab-size: 4;
  }

  *,
  ::before,
  ::after {
    background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements and pseudo elements */
    box-sizing: inherit;
  }

  ::before,
  ::after {
    text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
    vertical-align: inherit;
  }

  * {
    padding: 0; /* Reset `padding` and `margin` of all elements */
    margin: 0;
  }

  /* # =================================================================
     # General elements
     # ================================================================= */

  hr {
    overflow: visible; /* Show the overflow in Edge and IE */
    height: 0; /* Add the correct box sizing in Firefox */
  }

  details,
  main {
    display: block; /* Render the `main` element consistently in IE. */
  }

  summary {
    display: list-item; /* Add the correct display in all browsers */
  }

  small {
    font-size: 80%; /* Set font-size to 80% in `small` elements */
  }

  [hidden] {
    display: none; /* Add the correct display in IE */
  }

  abbr[title] {
    border-bottom: none; /* Remove the bottom border in Chrome 57 */
    /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  a {
    background-color: transparent; /* Remove the gray background on active links in IE 10 */
  }

  a:active,
  a:hover {
    outline-width: 0; /* Remove the outline when hovering in all browsers */
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace; /* Specify the font family of code elements */
  }

  pre {
    font-size: 1em; /* Correct the odd `em` font sizing in all browsers */
  }

  b,
  strong {
    font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
  }

  /* https://gist.github.com/unruthless/413930 */
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* # =================================================================
     # Forms
     # ================================================================= */

  input {
    border-radius: 0;
  }

  /* Replace pointer cursor in disabled elements */
  [disabled] {
    cursor: default;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto; /* Correct the cursor style of increment and decrement buttons in Chrome */
  }

  [type="search"] {
    -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
    outline-offset: -2px; /* Correct the outline style in Safari */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none; /* Remove the inner padding in Chrome and Safari on macOS */
  }

  textarea {
    overflow: auto; /* Internet Explorer 11+ */
    resize: vertical; /* Specify textarea resizability */
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit; /* Specify font inheritance of form elements */
  }

  optgroup {
    font-weight: bold; /* Restore the font weight unset by the previous rule */
  }

  button {
    overflow: visible; /* Address `overflow` set to `hidden` in IE 8/9/10/11 */
  }

  button,
  select {
    text-transform: none; /* Firefox 40+, Internet Explorer 11- */
  }

  /* Apply cursor pointer to button elements */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"],
  [role="button"] {
    cursor: pointer;
    color: inherit;
  }

  /* Remove inner padding and border in Firefox 4+ */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /* Replace focus style removed in the border reset above */
  button:-moz-focusring,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    outline: 1px dotted ButtonText;
  }

  button,
  html [type="button"], /* Prevent a WebKit bug where (2) destroys native `audio` and `video`controls in Android 4 */
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
  }

  /* Remove the default button styling in all browsers */
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
  }

  /* Style select like a standard input */
  select {
    -moz-appearance: none; /* Firefox 36+ */
    -webkit-appearance: none; /* Chrome 41+ */
  }

  select::-ms-expand {
    display: none; /* Internet Explorer 11+ */
  }

  select::-ms-value {
    color: currentColor; /* Internet Explorer 11+ */
  }

  legend {
    border: 0; /* Correct `color` not being inherited in IE 8/9/10/11 */
    color: inherit; /* Correct the color inheritance from `fieldset` elements in IE */
    display: table; /* Correct the text wrapping in Edge and IE */
    max-width: 100%; /* Correct the text wrapping in Edge and IE */
    white-space: normal; /* Correct the text wrapping in Edge and IE */
    max-width: 100%; /* Correct the text wrapping in Edge 18- and IE */
  }

  ::-webkit-file-upload-button {
    /* Correct the inability to style clickable types in iOS and Safari */
    -webkit-appearance: button;
    color: inherit;
    font: inherit; /* Change font properties to `inherit` in Chrome and Safari */
  }

  /* # =================================================================
     # Specify media element style
     # ================================================================= */

  img {
    border-style: none; /* Remove border when inside `a` element in IE 8/9/10 */
  }

  /* Add the correct vertical alignment in Chrome, Firefox, and Opera */
  progress {
    vertical-align: baseline;
  }

  svg:not([fill]) {
    fill: currentColor;
  }

  /* # =================================================================
     # Accessibility
     # ================================================================= */

  /* Hide content from screens but not screenreaders */
  @media screen {
    [hidden~="screen"] {
      display: inherit;
    }
    [hidden~="screen"]:not(:active):not(:focus):not(:target) {
      position: absolute !important;
      clip: rect(0 0 0 0) !important;
    }
  }

  /* Specify the progress cursor of updating elements */
  [aria-busy="true"] {
    cursor: progress;
  }

  /* Specify the pointer cursor of trigger elements */
  [aria-controls] {
    cursor: pointer;
  }

  /* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
  [aria-disabled] {
    cursor: default;
  }


</style>
