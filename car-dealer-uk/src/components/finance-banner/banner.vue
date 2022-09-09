<template>
  <div class="finance-banner d-none d-xl-block">
    <div class="row d-flex justify-content-around align-items-center">
      <div class="oval col-lg-3" style="">
        <div class="p-2">
          <div class="col-9 p-2">
            <p class="finance-banner__title">Finance a new or used car</p>
            <p class="finance-banner__subtitle">
              Adjust the options to find the finance arrangement that suits you.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row d-flex justify-content-around align-items-center">
          <div class="col-3" v-for="(select, index) in types">
            <div class="d-flex select-wrap">
              <label>{{ select.name }}</label>
              <select name="color" style="width: 100%">
                <option value="">Select</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data() {
    return {
      types: [
        {
          name: "Deposit",
          options: [],
        },
        {
          name: "Mileage",
          options: [],
        },
        {
          name: "Period",
          options: [],
        },
        {
          name: "Budget",
          options: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.select-wrap {
  border: 1px solid #777;
  border-radius: 14px;
  margin-bottom: 10px;
  width: 200px;
  padding: 10px;
  background-color: #3F3A50 ;
  color: #FFF;

}

.select-wrap label {

  color: #777;
  padding: 5px 20px 5px 5px;
  
}

select {
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent url("src/assets/svg/chevron-select.svg") no-repeat;
  background-position-x: 95%;
  background-position-y: 5px;
  color: #FFF;

}
</style>
