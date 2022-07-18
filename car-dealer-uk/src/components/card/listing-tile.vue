<script setup>
  import star from "../icons/star.vue";
  import Pagination from "./pagination.vue";
  import ListingType from "./listing-type.vue";
  import RepresentativeExample from "./representative-example.vue";

</script>

<template>
<div class="">
    <listing-type :total="brands.length -1" />
      <div class="row">
        <div class=" col-md-4 col-sm-6 col-xs-12 mb-2" v-for="(car, index) in brands">
          <div class="card  h-100" v-if="car.name">
            <div class="card-container">
              <span class="pills pills-secondary pills__text m-2 ">{{ car.advert_classification }}</span>
              <div class="badge-special">
                  <span class="badge-secondary">{{car.fuel_type}}</span>
                  <span class="badge-secondary"> {{car.transmission}}</span>
                  <span class="badge-secondary">{{car.body_type}}</span>

              </div>
              <img class="card-img-top" style="border-top-left-radius: 20px; border-top-right-radius: 20px" :src="car.original_media_urls[0]">

            </div>
            <div class="row p-1">
              <div class="card-section col-10">
                <p class="card-heading mb-0">{{car.plate}} {{car.make}}</p>
                <p class="card__sub-heading">{{car.derivative}}</p>
                <p class="card-heading mb-0">£550.90 /mo (PCP)</p>
                <span class="mini-text">£23,300 <a class="card-link">Calculate</a></span>

                <p></p>
              </div>
              <div class="col-2">
                <span><star /></span>
              </div>
            </div>

          </div>
          <div class="card grey mb-2 h-100 p-4" v-else>

            <div class="card-container text-center">
              <h5>Value your car</h5>
              <p>Find out the value of your car in just a few minutes.</p>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">VRM</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Mileage</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              </div>
              <div class="row p-2">
                <button class="btn-primary">Value my car</button>
              </div>

            </div>


            <div>

            </div>
          </div>
        </div>
        <pagination />
        <representative-example />
      </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "listing-tile",
  data(){
    return{
      brands: []
    }
  },
  created() {
    this.getBrands()
  },
  methods: {
    //Get all the Brands available
    getBrands: function (){
      axios.get('http://localhost:8000/data').then((resp)=>{
        if(!resp){
          console.log('Error getting Data')
        }else{
          this.brands= resp.data

          console.log(this.brands)

        }

      })
    }
  }
}
</script>


<style scoped>
.card{

}
</style>