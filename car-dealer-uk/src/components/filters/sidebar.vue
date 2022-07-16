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
            <a style="font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
background-color: rgba(248, 123, 123, 0.15);
border-radius: 16px;
text-align: center;
width: 73px;
height: 30px;



color: #F87B7B;
">Reset</a>
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