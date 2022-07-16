<template>
  <div>
      <div class="row mb-4">
        <div>
        <span class="fw-bold"> Showing {{total}} cars</span>

        <button class=" ml-5 pill-ho m-1" style="">All</button>
        <button class="pill-ho m-1">Used</button>
        <button class="pill-ho m-1">New</button>
        <button class="pill-ho m-1">Offers</button>
        </div>

      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  data(){
    return{
      brands: []
    }
  },
  props:{
    total:''
  },

  methods: {


  }
}
</script>

<style scoped>


</style>