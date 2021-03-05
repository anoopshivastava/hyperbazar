<template>
    <div class="home_page">
      <Slider/>
      <Add/>
      <FashionComponent/>
      <TravelFood/>
      <CultureComponent/>
    <CelebrityComponent/>
    <TravelFood/>
    </div>
</template>

<script>
import Add from './Add.vue'
import CelebrityComponent from './CelebrityComponent.vue'
import TravelFood from './TravelFood.vue'
import CultureComponent from './CultureComponent.vue'
import FashionComponent from './FashionComponent.vue'
import Slider from './Slider.vue'
export default {
  name: 'Home',
    components:{
    Add,
    CelebrityComponent,
    TravelFood,
    FashionComponent,
    CultureComponent,
    Slider
  
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
