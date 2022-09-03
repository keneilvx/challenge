<template>
  <div>
    <p class="heading__subtitle">Brand</p>
    <div>
      <div class="row">
        <div class="col-9">
          <div><span>Make</span></div>
        </div>
        <div class="col-2">
          <a
            class=""
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <remove-collapse></remove-collapse>  
          </a>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <div class="d-flex-wrap">
                  <div class="">
                    <options :item="test"/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><span>Model</span></div>
    </div>
  </div>
</template>

<script>
  import Options from './components/options.vue';
  import removeCollapse from '../icons/remove-collapse.vue';
export default {
  name: "brand",
data(){
  return{
      test:"Land Rover"
  }
},
  components:
  {
    Options,
    removeCollapse
  }
};
</script>

<style scoped>

.accordion-item{
  border: none !important;
}
  
</style>
