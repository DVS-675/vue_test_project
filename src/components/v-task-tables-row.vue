<template>
  <div class="v-task-tables-row">
    <div class="row__number row">
      <p>{{ row_data.id }}</p>
    </div>
    <div class="row__name row">{{ row_data.name }} {{ row_data.surname }}</div>
    <div class="row__date row">{{ row_data.birthday }}</div>
  </div>
</template>

<script>
export default {
  name: "v-task-tables-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
.v-task-tables-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px grey;
}
.row {
  flex-basis: 33.3%;

  text-align: left;
}
</style>
