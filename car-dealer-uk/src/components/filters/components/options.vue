<template>
    <div class="options-tag">
        <div class="row">
            <div class="col-7 d-flex">
                {{item}}
            </div>
            <div class="col-5 d-flex justify-content-end">
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
        min-width: 100px;
        max-width: 70%;
       
    }
</style>