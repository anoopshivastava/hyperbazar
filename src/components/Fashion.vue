<template>
    <Add/>
    <Navigation/>
    <ContentWrapper>
       <TopStory/>
       <Description/>
    </ContentWrapper>



    
</template>

<script>
import Add from './Add.vue'
import Navigation from './Navigation.vue'
import ContentWrapper from './ContentWrapper.vue'
import TopStory from './TopStory.vue';
import Description from './Description.vue'

export default {
  name: 'Fashion',
   components:{
    Add,
    Navigation,
    ContentWrapper,
    TopStory,
    Description
  },
  data(){
       return {
                  
                 
              }
  }
  
}
</script>

<style>
 
</style>
