<template>
  <div class="inner_content__box" id="background">
        <h2>生い立ち</h2>
        <hr>
        <ul class="timeline">
          <li class="timeline__list" v-for="event in events" :key="event.year">
            <span v-if="event.year">{{event.year}}</span>
            <div class="timeline__content">
              {{ event.name}}
              <img v-if="event.src" :src="event.src" alt="" width="240px">
            </div>
          </li>
        </ul>

      </div>
</template>
<script>
export default {
  data() {
    return {
      events: [
        {year: '1995', name: '広島で病院内で最も元気な赤ちゃんと言われて生まれる'},
        {year: '2011 ~', name: '中学から大学まで吹奏楽にのめりこむ（金管楽器のTubaを担当）'},
        {year: '2015 ~', name: '大学時代に懐石料理のレストランでホールのアルバイトを経験。「食」に興味を持つ。', src:'/static/images/IMG_4422.jpg'},
        {year: '', name: '大学時代に趣味でWEBの勉強をしてWEBページを作成。HTML・CSS・JavaScriptを独学で勉強。プログラミングにも興味を持つ。'},
        {year: '2017/4 ~ 2019/3', name: '新卒で地元のスーパーマーケットに入社。精肉部署に配属される。スライサーや包丁を用いた食肉の加工や発注、売り場づくりを担当。'},
        {year: '2019/4 ~ 2019/7', name: '上京しプログラミングの基礎を勉強する。'},
        {year: '2019/8 ~', name: '飲食店向けのSaaSを提供する企業（モバイルPOS・モバイルオーダーなど）にカスタマーサポートとして入社する。業務として社内業務のシステム化を務める'},
        {year: '2020/6 ~', name: '開発チームに異動。開発プロジェクトの管理や仕様の検討、お客様の窓口業務を行う。'},
      ]
    }
  },

}
</script>

<style lang="scss">
#background {
  img {
    margin: 10px;
  }
  .timeline {
    &__list {
      list-style: none;
      margin-bottom: 12px;
      padding-left: 12px;
      border-left: #fdc44f solid 3px ;
    }
    &__content {
      background-color: #faf6f6;
      padding: 20px;
      margin-left: 32px;
      border-radius: 8px;
      font-size: 14px;
    }
  }
  }
</style>
