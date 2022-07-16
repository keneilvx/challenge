<template>
    <div>
      <div class="row">
          <div class="col-10">
            Representative example: Borrowing £11,790.00 over 4 years with a representative APR of 7.9 %, an annual interest rate of 4.08 % (Fixed) and a deposit of £500.00, the amount payable would be £273.59 per month, with a total cost of credit of £1,843.32 and a total amount payable of £13,633.32.
          </div>
          <div class="col-2">
              <button>Hide Dropdown</button>
          </div>

      </div>
      <div class="row">
        <ul>
          <li>Personal Contract purchase</li>
          <li>Hire Purchase</li>
        </ul>

        <div>
          <div class="container">
            <div class="row rows-cols-5">
               <div class="col"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: "representative-example",
  data(){
    return {
       personal_contract_purchase:[
         {
           name:'48 monthly payments',
           info: '£ 157.25'
         },
         {
           name:'Cash Price',
           info: '£ 157.25'
         },
         {
           name:'Customer Deposit',
           info: '£ 250.00'
         },
         {
           name:'48 monthly payments',
           info: '£ 157.25'
         },
         {
           name:'Amount of credit',
           info: '£ 11,980.75'
         },
         {
           name:'APR',
           info: '7.9%'
         },
         {
           name:'Term',
           info: '48 months'
         },
         {
           name:'Total amount payable',
           info: '£ 157.25'
         },
         {
           name:'Rate of interest(fixed)',
           info: '4.08% PA'
         },
         {
           name:'Annual mileage',
           info: '8000'
         },
         {
           name: "Optional final payment",
           info: '£3,8888.04'
         }



       ]
    }
  }
}
</script>

<style scoped>

</style>