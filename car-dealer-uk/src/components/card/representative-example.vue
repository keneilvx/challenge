<template>
      <div class="row mb-3">
          <div class="col-10">
            Representative example: Borrowing £11,790.00 over 4 years with a representative APR of 7.9 %, an annual interest rate of 4.08 % (Fixed) and a deposit of £500.00, the amount payable would be £273.59 per month, with a total cost of credit of £1,843.32 and a total amount payable of £13,633.32.
          </div>
          <div class="col-2">
            <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Accordion Item #1
            </button>
          </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">

            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <div class="row">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal Contract purchase</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Hire Purchase</button>
                    </li>

                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-3" v-for="(items, index)  in personal_contract_purchase">
                          <div class="card m-2" >
                            <div class="text-center p-2">
                              <div>{{ items.name}}</div>
                              <div>{{items.info}}</div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
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