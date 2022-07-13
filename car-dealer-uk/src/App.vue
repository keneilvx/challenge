<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from './components/menu/MenuBar.vue';
import SideBar from './components/finance-banner/index.vue'
import Footer from "./components/footer/index.vue";
</script>

<template>
  <header>
    <div class="wrapper">
   
    <MenuBar/>
      <SideBar />
      <Footer/>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

</style>
