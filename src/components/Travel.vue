<template>
     <Add/>
     <Navigation/>
     <ContentWrapper>
         <TopStory/>
         <PhotoContent/>
     </ContentWrapper>
</template>

<script>

import Add from './Add.vue'
import Navigation from './Navigation.vue'
import ContentWrapper from './ContentWrapper.vue'
import TopStory from './TopStory.vue';
import PhotoContent from './PhotoContent.vue'
export default {
  name: 'Travel',
   components:{
    Add,
    Navigation,
    ContentWrapper,
    TopStory,
    PhotoContent
  },
  data(){
       return {
                  
                 
              }
  }
  
}
</script>

<style>
 
</style>
