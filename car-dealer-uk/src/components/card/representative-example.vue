<template>
    <div class="resp-example grey-box row">
          <div class="col-md-10 col-12">
            <b>Representative example:</b> Borrowing £11,790.00 over 4 years with a representative APR of 7.9 %, an annual interest rate of 4.08 % (Fixed) and a deposit of £500.00, the amount payable would be £273.59 per month, with a total cost of credit of £1,843.32 and a total amount payable of £13,633.32.
          </div>
          <div class="col-md-2 col-12  d-flex justify-content-center">
            <a class="accordion-dropdown" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <span class="pr-2">  Hide breakdown </span>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="8" fill="#F6F7FB"/>
<path d="M17 10L12.7071 14.2929C12.3165 14.6834 11.6834 14.6834 11.2928 14.2929L7 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </a>
          </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <div class="">
                  <ul class="row nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item col-6" role="presentation">
                      <button class="border-none nav-link active col-12" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal Contract purchase</button>
                    </li>
                    <li class="nav-item col-6" role="presentation">
                      <button class="border-none col-12 nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Hire Purchase</button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xs-12 col-md-3" v-for="(items, index)  in personal_contract_purchase">
                          <div class="card-representative-example m-2" >
                            <div class="text-center p-2">
                              <div>{{ items.name}}</div>
                              <div class="accordion-bold">{{items.info}}</div>
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
           info: '8,000'
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

.grey-box{
  background-color: rgb(245, 247, 251);
  border: 1px solid rgb(209, 214, 224);
  padding: 10px 0 10px 0;
  margin-bottom: 40px;
  border-radius: 10px;
}
.accordion-bold{
  font-weight: 600;
}

.accordion-dropdown{
padding-top: 20px;
padding-left: 10px;
padding-right: 10px;
background-color: #FFF;
border-radius: 10px;
text-decoration: none;
color: #000;

}

.card-representative-example{
  position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 20px;
}
</style>