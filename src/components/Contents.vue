<template>
  
</template>

<style lang="scss">
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

</style>

<script>

export default {

}
</script>
