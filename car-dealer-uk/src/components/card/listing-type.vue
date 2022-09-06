<template>
  <div>
    <div class="row mb-4">
      <div class="pills-section">
        <span class="fw-bold mr-3 cr-pl-2"> Showing {{ total }} cars</span>
        
        <button class=" ml-5 pill-showing active m-1" style="background-color: #7572ff; border: none;">All</button>
        <button class="pill-showing m-1">Used</button>
        <button class="pill-showing m-1">New</button>
        <button class="pill-showing m-1">Offers</button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  data() {
    return {
      brands: []
    }
  },
  props: {
    total: ''
  },

  methods: {}
}
</script>

<style scoped>
  .cr-pl-2{
    padding: 20px;
  }

</style>