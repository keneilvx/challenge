<template>
  <div class="footer">
    <div class="footer-main">
      <div class="row">
        <div class="col-2">
          <h6>Car Dealer</h6>
        </div>
        <div class="col-5">
          <div class="row">
            <div class="col-6">
              <p>Branch Details</p>

              <p>Address</p>
              <p>
                101 Business Street
                Business Town
                Business County
                BU51 N55
              </p>
              <p>Telephone</p>
              <a>{{ telephone }}</a>
            </div>
            <div class="col-6">
              <p>Opening Times</p>
              <div class="row" v-for="(items, index) in opening_times">
                <div class="col-6">
                  <p>{{items.day}}</p>
                </div>
                <div class="col-6">
                  <p>{{items.time}}</p>
                </div>
              </div>
              <p>Email</p>
              <a>enquires@cardealer.uk</a>
            </div>
          </div>
        </div>
        <div class="col-3">
          <p>Popular Brands</p>
        </div>
        <div class="col-2">
          <p>Site Map</p>
          <div>
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
    <div class="footer-legal">

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
      brands: ['Audi', 'BMW', 'Peugeot', 'Fiat' , 'SEAT', 'Land Rover', 'Vauxhall', 'Mercedes-Benz', "Volkswagen"]
    }
  }
}
</script>

<style scoped>

</style>