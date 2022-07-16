<template>
<div class="row p-4">

    <div class="col-4"><a>Back to top</a></div>
    <div class="col-4">
      <div class="row pagination">
        <div class="col" v-for="(btns, index) in buttons">
          <button class="btn" >{{btns}}</button>
        </div>
      </div>


    </div>
    <div class="col-4">
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