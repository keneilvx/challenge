<template>
  <div>
    <div class="row mb-4">
      <div class="col-8">
        <div class="pills-section">
          <span class="fw-bold mr-3 cr-pl-2"> Showing {{ total }} cars</span>
          <button class=" ml-5 pill-showing active m-1" style="background-color: #7572ff; border: none;">All</button>
          <button class="pill-showing m-1">Used</button>
          <button class="pill-showing m-1">New</button>
          <button class="pill-showing m-1">Offers</button>
        </div>
      </div>

      <div class="col-4">
        <div class="d-flex justify-content-end pr-cl-2">
          <select class="dropdown__main">
            <option>
              lowest price
            </option>
          </select>
        </div>
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

  .pr-cl-2{
    padding-right: 20px;
  }

</style>