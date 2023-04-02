<template>
  <router-link :to="{ name: 'main' }">
    <div class="v-main-page__link_to_task">Назад на главную</div>
  </router-link>
  <div class="v-task">
    <h1>Тестовое задание</h1>
    <div class="v-task__content">
      <v-task-tables :player_data="USERS" />
      <vTaskTablesGroups />
    </div>
  </div>
</template>

<script>
import vTaskTables from "./v-task-tables.vue";
import vTaskTablesGroups from "./v-task-tables-groups.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-task",
  components: {
    vTaskTables,
    vTaskTablesGroups,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["USERS", "GROUP"]),
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API", "ADD_TO_GROUP"]),
  },
  mounted() {
    this.GET_USERS_FROM_API();
  },
};
</script>

<style>
.v-task__content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
}
</style>
