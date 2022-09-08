<template>
  <p class="heading__subtitle">Specification</p>
  <div>
    <div v-for="(filter , index) in filters">
      <filter-dropdown :filter_id="filter.id" :filter_name="filter.name"></filter-dropdown>
    </div>
  </div>
</template>

<script>
    import FilterDropdown from './components/filter-dropdown.vue';
export default {
  name: "specification",

  components:{
    FilterDropdown
  },
  data(){
      return {
        filters:[
          {
            id: 'Fuel',
            name: 'Fuel type',

          },
          {
            id: 'Body',
            name: 'Body type'
          },
          {
            id: 'transmission',
            name: 'Transmission'
          },
          {
            id: 'Engine',
            name: 'Engine size'
          },
          {
            id: 'mileage',
            name: 'Mileage'
          },
          {
            id: 'colour',
            name: 'Colour'
          },
          {
            id: 'doors',
            name: 'Doors'
          },
          {
            id: 'features',
            name: 'Features'
          }
        ]


        }

      }
  }


</script>

<style scoped>

</style>