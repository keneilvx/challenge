<template>
  <div>
    <p class="heading__subtitle">Budget</p>
    <div>
      <div><span>Min. Price</span></div>
      <div><span>Max. Price</span></div>
    </div>
  </div>
</template>

<script>
  import FilterDropdown from './components/filter-dropdown.vue';
export default {

  name: "budget",

  components: {
    FilterDropdown
  }
}
</script>

<style scoped>

</style>