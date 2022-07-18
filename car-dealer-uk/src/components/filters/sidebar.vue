<script setup>
  import Brand from "./brand.vue";
  import Specification from "./specification.vue";
  import Budget from "./budget.vue";
</script>

<template>
  <div>
    <div class="p-3">
        <div class="row" >
          <div class="col-6">
            <p>Filters</p>
          </div>
          <div class="col-6 d-flex justify-content-end">
            <a class="reset">Reset</a>
          </div>

          <brand/>
          <specification />
          <Budget />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue"
}
</script>

<style scoped>

</style>