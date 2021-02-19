<template>
  <div>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active tab</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tab</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled tab</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">Skills</h4>
      <ul class="skills row">
      <li v-for="skill in skills" :key="skill.id" class="skill col-3">
        <div class="skill_img">
            <img :src="skill.src" class="skill_img">
        </div>
        <div class="skill_name">
            {{ skill.name }}
        </div>
        <div class="skill_detail">
            {{ skill.detail}}
        </div>
        <div class="skill_tags">
          <div class="skill_tag" v-for="tag in skill.tags" :key="tag">{{tag}}</div>
        </div>
      </li>
      </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data(){
    return {
      skills: [
        {id: 1, src: '/static/images/logo.png', name: 'HTML&CSS', detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。',
        tags: ['プログラミング', 'コーディング']},
        {id: 2, src: '/static/images/js-logo.png', name: 'JavaScript',  detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。'},
        {id: 3, name: 'Ruby', detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。'},
        {id: 4, name: 'PHP', detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。'},
        {id: 5, name: 'Adbe XD Photoshop Illustrator', detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。'},
        {id: 6, name: '社内システムの要件定義・構築・運用・保守まで', detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。'},
        {id: 7, name: 'APIを利用した社内ツールの連携等の業務改善', detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。'},
        {id: 8, name: 'Vue.js', detail: 'HTMLとCSSは独学で勉強しました。会社ではLPやサポートページのコーディング業務を行いました。'},
      ]
    }
  }
}
</script>

<style>
.skills {
  list-style: none;
}



.skill_detail {
  font-size: 14px;
}

.skill_img {
  width: 160px;
  padding: 8px;
  margin: auto;
}

.skill_tags {
  display: flex;
  font-size: 12px;
}
</style>