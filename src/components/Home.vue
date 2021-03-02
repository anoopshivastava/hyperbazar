<template>
    <div class="home_page">
      <Add/>
    <CelebrityComponent/>
    <TravelFood/>
    </div>
</template>

<script>
import Add from './Add.vue'
import CelebrityComponent from './CelebrityComponent.vue'
import TravelFood from './TravelFood.vue'
export default {
  name: 'Home',
    components:{
    Add,
    CelebrityComponent,
    TravelFood
  },
  data(){
       return {
                  
                 
              }
  }
  
}
</script>

<style>
 .home_page{
   padding-bottom:30px;
 }
</style>
