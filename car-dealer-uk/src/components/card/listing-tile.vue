<template>
<div>
      <div class="row p-2">
        <div class="col-md-4" v-for="(car, index) in brands">
          <div class="card">
              <div>{{ car.advert_classification }}</div>
            <img :src="car.original_media_urls[0]">
          </div>
        </div>
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