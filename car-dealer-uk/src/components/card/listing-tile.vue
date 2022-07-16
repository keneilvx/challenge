<script setup>

  import Pagination from "./pagination.vue";
  import ListingType from "./listing-type.vue";
  import RepresentativeExample from "./representative-example.vue";
</script>

<template>
<div class="">
    <listing-type :total="brands.length" />
      <div class="row">
        <div class="col-md-4" v-for="(car, index) in brands">
          <div class="card mb-2">
            <div class="card-container">
              <span class="pills pills-secondary pills__text m-2  ">{{ car.advert_classification }}</span>
              <div class="badge-special">
                <span class="badge-secondary">{{car.fuel_type}}</span>
                <span class="badge-secondary"> {{car.transmission}}</span>
                <span class="badge-secondary">{{car.body_type}}</span>
              </div>
              <img class="card-img-top" style="border-top-left-radius: 20px; border-top-right-radius: 20px" :src="car.original_media_urls[0]">

            </div>
            <div class="card-section p-1">
            <p class="card-heading mb-0">{{car.plate}} {{car.make}}</p>
            <p class="card__sub-heading">{{car.derivative}}</p>
             <p class="card-heading mb-0">£550.90 /mo (PCP)</p>
             <span class="mini-text">£23,300 <a class="card-link">Calculate</a></span>

            <p></p>
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

</style>