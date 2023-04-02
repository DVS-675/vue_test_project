<template>
  <div class="v-task-tables-groups">
    <h2>Группа 1</h2>
    <v-task-tables-groups-item/>
  </div>
</template>

<script>

import vTaskTablesGroupsItem from './v-task-tables-groups-item.vue'
export default {
  name: "v-task-tables-groups",
  components: {
    vTaskTablesGroupsItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-task-tables-groups {
    display: flex;
    flex-direction: column;
    justify-content: center;    
    width: 400px;
    
}
</style>
