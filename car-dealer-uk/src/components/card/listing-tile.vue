<script setup>
import StarComponent from "../icons/star.vue";
import Pagination from "./pagination.vue";
import ListingType from "./listing-type.vue";
import RepresentativeExample from "./representative-example.vue";

</script>

<template>
  <div class="">
    <listing-type :total="brands.length -1"/>
    <div class="row">

      <div v-for="(car, index) in brands" class=" col-md-4 col-sm-6 col-xs-12 mb-2 ">
        <div v-if="car.name" class="card  h-100">
          <div class="card-container">
            <div class="d-flex justify-content-between">
              <span class="pills pills-secondary pills__text m-2 d-none d-sm-block">{{ car.advert_classification }}</span>
              <span class="pills pills-secondary d-none d-sm-block">1 of {{ car.original_media_urls.length }}</span>
              <span>
                <button class="pills pills-secondary m-2 d-none d-sm-block" style="right: 50px;">{{ '>' }}
              </button></span>
              <span>
                 <button class="pills pills-secondary m-2 d-none d-sm-block" style="right: 80px;">{{ '<' }}  </button>
              </span>
            </div>

            <div class="badge-special d-none d-sm-block">
              <span class="badge-secondary">{{ car.fuel_type }}</span>
              <span class="badge-secondary"> {{ car.transmission }}</span>
              <span class="badge-secondary">{{ car.body_type }}</span>

            </div>
            <img :src="car.original_media_urls[0]"
                 class="card-img-top d-none d-sm-block" style="border-top-left-radius: 20px; border-top-right-radius: 20px">
            <section>
              <div class="row">
                <div class="scroll-cards">
                  <div v-for="(images, index) in car.original_media_urls" class="card">
                    <img :src="images" class="card-img-top">
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="row p-1">
            <div class="card-section col-10">
              <p class="card-heading mb-0">{{ car.plate }} {{ car.make }}</p>
              <p class="card__sub-heading">{{ car.derivative }}</p>
              <p class="card-heading mb-0">£550.90 /mo (PCP)</p>
              <span class="mini-text">£23,300 <a class="card-link">Calculate</a></span>

              <p></p>
            </div>
            <div class="col-2 d-flex justify-content-end">
              <span>  <span class="pills small-screen pills-secondary pills__text m-2">{{
                  car.advert_classification
                }}</span></span> <span><star-component/></span>
            </div>
          </div>

        </div>
        <div v-else class="card grey mb-2 h-100 p-2">

          <div class="card-container text-center">
            <div class="row">
              <div class="col-6 col-md-12">
                <h5>Value your car</h5>
                <p>Find out <span class="d-none d-sm-block">the value of your car </span> in just a few minutes.</p>
              </div>
              <div class=" d-none d-sm-block">
                <div class="input-group mb-3">
                  <span id="basic-addon1" class="cost-card">VRM</span>
                  <input aria-describedby="basic-addon1" aria-label="Username" class="form-control" placeholder="Username"
                         type="text">
                </div>
                <div class="input-group mb-3">
                  <span id="basic-addon1" class="cost-card">Mileage</span>
                  <input aria-describedby="basic-addon1" aria-label="Username" class="form-control" placeholder="Username"
                         type="text">
                </div>
              </div>
              <div class="col-6 col-md-12 d-flex align-items-center">
                <button class="col-12 btn-primary">Value my car</button>
              </div>
            </div>


          </div>
          <div>

          </div>
        </div>
      </div>

      <pagination/>
      <representative-example/>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "listing-tile",
  data() {
    return {
      windowHeight: window.innerHeight,
      brands: [],
      icons: ['<', '>']
    }
  },
  created() {
    this.getBrands()
  },
  methods: {
    //Get all the Brands available
    getBrands: function () {
      axios.get('http://localhost:8000/data').then((resp) => {
        if (!resp) {
          console.log('Error getting Data')
        } else {
          this.brands = resp.data

          console.log(this.brands)

        }

      })
    }
  }
}
</script>


<style scoped>
  .label-input{
    font-size: 12px;
  }
  .label-white{
    position: absolute;
  }
@media only screen and (max-width: 576px) {

  .card {
    background-color: #fff;
    background-clip: border-box;
    border: none;
    border-radius: 0.25rem;
    box-shadow: none !important;
  }

  .pills {
    position: relative;
  }

  .card-img-top {
    border-radius: 20px;
  }
}

@media only screen and (min-width: 576px) {
  .scroll-cards {
    display: none
  }

  .small-screen {
    display: none;
  }

}
</style>