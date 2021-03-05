<template>
   
   <Add/>
   <Navigation/>
   <Heading headtitle="BEAUTY"/>
     <ContentWrapper>
            <BeautyTop/>
    </ContentWrapper>
     <div class="beauty_wrap"> 
        <BeautyList/>
         <Button/>
     </div>
</template>

<script>
import Add from './Add.vue'
import Navigation from './Navigation.vue'
import ContentWrapper from './ContentWrapper.vue'
import BeautyList from './BeautyList.vue'
import BeautyTop from './BeautyTop.vue'
import Button from './Button.vue'
import Heading from './Heading.vue'
export default {
  name: 'Beauty',
  components:{
    Add,
    Navigation,
    ContentWrapper,
    BeautyList,
    BeautyTop,
    Button,
    Heading
  },
  data(){
       return {
                  
                 
              }
  }
  
}
</script>

<style>
  @import '../assets/css/global.css';
  .beauty_wrap{
    padding-bottom:50px;
  }
</style>