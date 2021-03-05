<template>
        <Add/>
        <Navigation/>
        <ContentWrapper>
          <TopHeading/>
          <CelebrityList/>
            <Button/>
        </ContentWrapper>
</template>

<script>


import Add from './Add.vue'
import Navigation from './Navigation.vue'
import ContentWrapper from './ContentWrapper.vue'
import CelebrityList from './CelebrityList.vue'
import TopHeading from './TopHeading'
import Button from './Button'

export default {
  name: 'Culture',
   components:{
    Add,
    Navigation,
    ContentWrapper,
    CelebrityList,
    TopHeading,
    Button
  },
  data(){
       return {
                  
                 
              }
  }
  
}
</script>

<style>
 
</style>
