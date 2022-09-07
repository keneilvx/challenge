<template>
  <div>
    <p class="heading__subtitle">Brand</p>
    <div>
      <filter-dropdown
      :filter_id="'Name'" :filter_name="'Make'" :filter-options="'Land Rover'"
      ></filter-dropdown>
      <filter-dropdown
      :filter_id="'Name'" :filter_name="'Model'" :filter-options="'Land Rover'"
      ></filter-dropdown>
      
    </div>
  </div>
</template>

<script>
  import Options from './components/options.vue';
  import removeCollapse from '../icons/remove-collapse.vue';
  import addExpanded from '../icons/add-expanded.vue';
import AddExpanded from '../icons/add-expanded.vue';

import FilterDropdown from './components/filter-dropdown.vue';
export default {
  name: "brand",
data(){
  return{
      test:"Land Rover"
  }
},
  components:
  {
    Options,
    removeCollapse,
    addExpanded,
    AddExpanded,
    FilterDropdown
}
};
</script>

<style scoped>

.accordion-item{
  border: none !important;
}
  
</style>
