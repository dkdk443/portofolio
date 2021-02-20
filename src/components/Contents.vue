<template>
  <div>
    <div class="inner_content">
      <div class="inner_content__box">
        <h2>はじめに</h2>
        <hr>
        <div class="texts">
          <p>この度はこのポートフォリオサイト足を運んでいただき、誠にありがとうございます！</p>
          <p>退屈されないように、たくさんの工夫を散りばめたいと思います。</p>
          <p>ごゆっくりとご覧ください。</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugit dolor maiores iure est doloribus nihil quia sapiente. Debitis cumque rerum assumenda vitae quasi iste similique, adipisci consectetur odio rem!</p>
        </div>

      </div>
      <div class="inner_content__box" id="me">
        <h2>私について</h2>
        <hr>
        <div class="me-img">
          <img src="/static/images/phone_hero.png" alt="" width="100px">
        </div>
        <div class="texts">
          <p>広島県出身</p>
          <p></p>
        </div>
      </div>
      <div class="inner_content__box" id="skill">
        <h2>作ったもの</h2>
        <hr>
        <h3>人間関係を円滑にする類人猿分類</h3>
        <div class="texts">
          <p></p>
          <p></p>
        </div>
      </div>
      <div class="inner_content__box" id="background">
        <h2>生い立ち</h2>
        <hr>

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
</template>

<style lang="scss">
.inner_content {
  padding: 0 30px;
  &__box {
    min-height: 100vh;
    padding: 42px 0;
  }
  p {
    font-size: 14px;
  }
}
h2 {
  font-size: 24px;
  font-weight: bold;
}
</style>

<script>
export default {

}
</script>
