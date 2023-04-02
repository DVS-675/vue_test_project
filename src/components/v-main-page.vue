<template>
  <div class="v-main-page">
    <h1>{{ title }}</h1>
    <p class="v-main-page__des">
      Меня зовут Дмитрий. Живу в Тюмени. Имею высшее образование, специальность
      - геолог. До недавнего времени работал 6 лет геологом-модельером в одном
      из проектных институтов. Также имею дополнительное высшее образование -
      переводчик в сфере профессиональных коммуникаций (английский язык). Решил
      начать обучаться веб-разработке в прошлом году. Обучаюсь в онлайн школе
      SkyPro. Имею хорошие навыки современной верстки, а также знание языка
      JavaScript, умею работать с git, имею базовые навыки работы с vue.js.
      Готов развиваться.
    </p>
    <router-link :to="{ name: 'task', params: { player_data: USERS } }">
      <div class="v-main-page__link_to_task">Задание</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "v-main-page",
  components: {},
  props: {},
  data() {
    return {
      title: "Информация о мне",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  &__link_to_task {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0cf;
      border-radius: 10rem;
      z-index: -2;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: darken(#0cf, 15%);
      transition: all 0.3s;
      border-radius: 10rem;
      z-index: -1;
    }
    &:hover {
      color: #fff;
      &:before {
        width: 100%;
      }
    }
  }
  &__des {
    width: 900px;
    font-size: 20px;
    text-align: justify;
  }
}
</style>
