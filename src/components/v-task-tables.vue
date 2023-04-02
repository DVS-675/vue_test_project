<template>
  <div class="v-task-tables">
    <div class="v-task-tables__header">
      <p>№</p>
      <p @click="sortByName">
        Участник
        <i class="large material-icons">sort</i>
      </p>
      <p @click="sortByBirth">
        Дата рождения
        <i class="large material-icons">swap_vert</i>
      </p>
    </div>
    <div class="v-task-tables__body">
      <v-task-tables-row
        v-for="row in player_data"
        :key="row.id"
        :row_data="row"
      />
    </div>
  </div>
</template>

<script>
import vTaskTablesRow from "./v-task-tables-row.vue";

export default {
  name: "v-task-tables",
  components: {
    vTaskTablesRow,
  },
  props: {
    player_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      player: this.player_data,
    };
  },
  computed: {},
  methods: {
    sortByName() {
      this.player.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByBirth() {
      this.player.sort((a, b) => new Date(a.birthday) - new Date(b.birthday));
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-task-tables {
  width: 500px;
  margin: 0 auto;
  &__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 2px black;
    border-top: solid 2px black;
    align-items: center;
  }
  &__header p {
    display: flex;
    gap: 5px;
    flex-basis: 33.3%;
    text-align: left;
    cursor: pointer;
  }
}
</style>
