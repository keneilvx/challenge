<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from './components/menu/MenuBar.vue';
import SideBar from './components/filters/sidebar.vue'
import FinanceBanner from "./components/finance-banner/banner.vue";
import Footer from "./components/footer/index.vue";
import ListingTile from "./components/card/listing-tile.vue";
</script>

<template>
  <header>
    <div class="wrapper">
    <MenuBar/>
      <FinanceBanner/>
      <div class="row mt-4">
        <div class="col-md-2">
            <side-bar />
        </div>
        <div class="col-md-10">
          <listing-tile/>
        </div>
      </div>
      <Footer/>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">


</style>
