<template>
  <div class="footer">
    <div class="footer-main p-4">
      <div class="row">
        <div class="col-md-2 col-12 text-sm-center text-md-center">
          <h6 class="headings">CarDealer<sup class="subscript p-1" style="">UK</sup></h6>
        </div>
        <div class="col-md-5 col-12">
          <div class="row">
            <p class="headings">Branch Details</p>
            <div class="col-5">
              <p class="heading__subtitle">Address</p>
              <p class="subtext mb-3">
                101 Business Street
                Business Town
                Business County
                BU51 N55
              </p>
            </div>
            <div class="col-md-7 col-12">
              <p class="heading__subtitle">Opening Times</p>
              <div class="row" v-for="(items, index) in opening_times">
                <div class="col-6">
                  <p class="subtext">{{items.day}}</p>
                </div>
                <div class="col-6">
                  <p class="subtext">{{items.time}}</p>
                </div>
              </div>

            </div>
            <div class="col-md-5">
              <p class="heading__subtitle">Email</p>
              <a class="link">enquires@cardealer.uk</a>
            </div>
            <div class="col-md-7 col-12">
              <p class="heading__subtitle ">Telephone</p>
              <a class="link">{{ telephone }}</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-12 ">
          <p class="headings">Popular Brands</p>
          <div class="row">
            <div v-for="(brand) in brands" class="col-6">
                <p class="subtext">{{brand}}</p>
            </div>
          </div>

        </div>
        <div class="col-2">
          <p class="headings">Site Map</p>
          <div class="subtext">
            <p>Home</p>
            <p>Our cars</p>
            <p>Sell your Car</p>
            <p>Apply for finance</p>
            <p>About Us </p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 footer-legal">
      <div class="row">
        <div class="col-lg-5">
              <p class="heading__subtitle">Company info</p>
            <p class="subtext">Registered in England and Wales.
              Registered No: 00000000 | VAT No: 000 0000 00 <br>
              Registered Office: 101 Business Street, Business Town, Business County BU51 N55.</p>
        </div>
        <div class="col-lg-7">
            <p class="heading__subtitle">Financial disclosure</p>
            <p class="subtext">CarDealerUK Limited act as a credit broker and not a lender. Finance is Subject to status. We are authorised and regulated by the Financial Conduct Authority under firm reference number 000000. We work with a number of carefully selected credit providers who may be able to offer you finance for your purchase. We may receive a commission payment from the finance provider if you decide to enter into an agreement with them. If you would like to know how we handle complaints, please ask for a copy of our complaints procedure. You can also find information about referring a complaint to the Financial Ombudsman Service (FOS).</p>
        </div>


          <div class="col-6">
            <span class="subtext">Powered by <a class="subtext">Nexus Point Apex</a></span>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-3">
                <a class="subtext">Terms and conditions</a>

              </div>
              <div class="col-3">
                <a class="subtext">Privacy Policy</a>
              </div>
              <div class="col-3">
                <a class="subtext">Site Map</a>
              </div>

              <div class="col-3">
                <a class="subtext">Cookie policy</a>
              </div>



            </div>


          </div>

    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      telephone: "01234 567890",
      opening_times: [
        {
          day: 'Wednesdays',
          time: '09:00-18:00'
        },
        {
          day: 'Saturday',
          time: '10:00-17:00'
        },
        {
          day: 'Sunday',
          time: '10:00-16:00'
        }
      ],
      brands: ['Audi', 'BMW', 'Peugeot', 'Fiat' , 'SEAT', 'Land Rover', 'Vauxhall', 'Mercedes-Benz', "Volkswagen" , "Mini"]
    }
  }
}
</script>

<style scoped>
table{
  color: #FFFFFF;
}
</style>