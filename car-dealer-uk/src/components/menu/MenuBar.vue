<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CarDealer<sup class=" pl-1">UK</sup></a>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Features</RouterLink>
        </li>
       <li>
         <RouterLink class="nav-link" to="/">Our Cars</RouterLink>
       </li>
        <li>
         <RouterLink class="nav-link" to="/">Sell your car</RouterLink>
       </li>
        <li>
         <RouterLink class="nav-link" to="/">Apply for Finance</RouterLink>
       </li>
        <li>
         <RouterLink class="nav-link" to="/">About us</RouterLink>
       </li>
        <li>
         <RouterLink class="nav-link" to="/">Contact</RouterLink>
       </li>
      </ul>

    </div>
    <div class="navbar-buttons">
      <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        Dropdown
      </button>
      <a class="navbar-buttons--menu m-1">Call Us</a>
      <a  class="navbar-buttons--menu m-1" >Email Us</a>
    </div>
  </div>
</nav>
       
    </div>

</template>