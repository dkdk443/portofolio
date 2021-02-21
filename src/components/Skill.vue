<template>
   <div class="inner_content__box" id="skill">
        <h2>スキル</h2>
        <table>
          <tr v-for="skill in skills" :key="skill.id"><th>{{ skill.name}}</th><td></td><td>{{skill.rate}}</td></tr>
        </table>
      </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {id: 1, name: 'HTML/CSS/SCSS', rate: 'レスポンシブ対応を踏まえてWEBサイトのコーディングができる'},
        {id: 2, name: 'JavaScript', rate: '基本的なプログラミング（DOM操作・関数（アロー関数）・配列操作・条件分岐・非同期処理など）ができる'},
        {id: 3, name:'Vue.js/Vue CLI', rate: 'ディレクティブを用いることができる。vue-routerを用いて簡単なシングルページアプリケーションが実装できる。コンポーネントを用いてメンテナンスのしやすさを意識したコードを書くことができる'},
        {id: 4,name:'PHP/Larevel', rate: 'CRUDの基本的なアプリケーションを実装できる'},
        {id: 5,name:'Adobe XD', rate: '画面仕様を作成することができる'},
        {id: 6,name:'Premier Pro(動画編集)', rate: '簡単な動画編集ができる'},
        {id: 7, name: 'Git/GitHub', rate: 'コマンドラインを用いて基本的な操作（add/commit/push/branch/checkout/merge）ができる'},
        {id: 8, name: 'サポート・システムトラブル対応', rate: 'お客様の状況をヒアリングし、問題の切り分けができる・障害報告書のベースを作成することができる'},
        {id: 9, name:'コミュニケーション', rate: '営業〜開発までチームの垣根を超えてコミュニケーションを図ることができる／お客様の要望を整理しエンジニアに正確に伝えることができる'},
        {id: 10, name:'資料作成', rate: 'PowerPont/Excel/Google Slide/Google SpreadSheet/Adobe XDを用いて提案書や簡単な開発資料（業務フロー・機能一覧・画面遷移図）を作成できる'},
        {id:11, name: 'Excel/SpreadSheet', rate: '関数を利用してデータの集計や精査ができる（v-lookup/exact/count/countif　など'},
        {id:12, name: 'kintone', rate: '標準機能を理解し、社内の簡単なシステム（SFA・CRM）を構築することができる。JavaScriptを用いてカスタマイズ開発ができる'},
      ]
    }
  },

}
</script>
<style lang="scss" scoped>
table {
  tr {
    border-bottom: 1px dashed gray;
  }
  th {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  td {
    padding: 10px;
    font-size: 16px;
  }
}


</style>
