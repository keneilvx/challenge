<template>
    <div class="options-tag">
        <div class="row">
            <div class="col-8 d-flex">
                {{item}}
            </div>
            <div class="col-4 d-flex justify-content-end">
                <remove-collapse></remove-collapse>
            </div>
            
        </div>

    </div>
</template>

<script>
    import removeCollapse from '../../icons/remove-collapse.vue';
  export default {
    name: "brand",
    props: {
        item: ''
    },
    components:{
        removeCollapse
    }
  
 
  };
  </script>
  

<style>
    
    .options-tag{
        border-radius: 8px;
        background-color: aliceblue;
        padding: 5px;
       
    }
</style>