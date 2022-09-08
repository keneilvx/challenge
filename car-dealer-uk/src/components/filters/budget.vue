<template>
  <div>
    <p class="heading__subtitle">Budget</p>
    <div>
      <filter-dropdown
      :filter_id="'min'" :filter_name="'Min. Price'" :filter-options="'Min. Price'"
      ></filter-dropdown>
      <filter-dropdown
      :filter_id="'max'" :filter_name="'Max. Price'" :filter-options="'Max. Price'"
      ></filter-dropdown>
    </div>
  </div>
</template>

<script>
  import FilterDropdown from './components/filter-dropdown.vue';
  import AddExpanded from '../icons/add-expanded.vue';
export default {

  name: "budget",

  components: {
    FilterDropdown,
    AddExpanded,
  }
}
</script>

<style scoped>

</style>