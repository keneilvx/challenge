<template>
<div class="row p-4">

    <div class="col-3 d-none d-lg-block"><a>Back to top</a></div>
    <div class="col-xs-12 col-md-6">
      <div class="row pagination">
        <div class="col  m-0 p-0" v-for="(btns, index) in buttons">
          <button class="btn" >{{btns}}</button>
        </div>
      </div>


    </div>
    <div class="col-3 d-none d-lg-block">
      <div class="d-flex justify-content-end">
        <select class="dropdown__main">
          <option>
            lowest price
          </option>
        </select>
      </div>

    </div>

</div>
</template>

<script>
export default {
  name: "pagination",
  data(){
    return{
        buttons:[ '<', '1', '2','3', '>','>>']
    }
  }
}
</script>

<style scoped>

</style>