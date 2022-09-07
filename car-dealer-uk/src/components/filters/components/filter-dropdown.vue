<template>
    <div class="filters-button">
        <div class="row">
        <div class="col-9">
          <div><span>{{filter_name}}</span></div>
        </div>
        <div class="col-2">
          <a
            class=""
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#'+ filter_name"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
           <add-expanded></add-expanded>
          </a>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <div
              :id="filter_name"
              class="accordion-collapse collapse close"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <div class="d-flex-wrap">
                  <div class="row">
                    <div>
                      
                    </div>
                    <options :item="filter_options"/>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</template>


<script>
    import addExpanded from '../../icons/add-expanded.vue';
import options from './options.vue';
    export default{
        components: {
            options,
            addExpanded
        },

        props:{
            filter_name: '',
            filter_id: '',
            filter_list: null,
            filter_options: ''

        }
    }

</script>

<style>
    .accordion-item{
        border: none !important;
    }

    .filters-button{
        padding: 10px;
        border-radius: 10px;
    }


</style>