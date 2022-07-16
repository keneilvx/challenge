<template>

  <div class="finance-banner d-none  d-xl-block ">
    <div class="row d-flex justify-content-around align-items-center">
    <div class="oval col-lg-3" style="">
      <div class="p-2" >
        <div class="col-9 p-2">
          <p class="finance-banner__title">Finance a new or used car</p>
          <p class="finance-banner__subtitle">Adjust the options to find the finance
            arrangement that suits you.
          </p>
        </div>
      </div>

    </div>
    <div class="col-lg-9">

      <div class="row d-flex justify-content-around align-items-center">
        <div class="col-3" v-for="(select, index) in types">
          <span>{{select.name}}</span>
            <select class="dropdown__top" style="">
              <option>Select</option>
            </select>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "index.vue",
  data(){
    return{
      types:[
        {
          name: 'Deposit',
          options: []
        },
        {
          name: 'Mileage',
          options: []
        },
        {
          name: 'Period',
          options: []
        },
        {
          name: 'Budget',
          options: []
        }
      ]


    }
  }

}
</script>

<style scoped>

</style>