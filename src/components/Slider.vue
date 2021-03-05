<template>
    <section class="banner">
          <div class="container">
               <figure>
                     <img :src="bannerPic" alt=""/>
               </figure>
               <h2>Dolce &amp; Gabbana celebrates Alta Moda
                                </h2>
          </div>
    </section>
</template>
<script>
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
export default {
    name:'Slider',
    data(){
        return{
            bannerPic: `./images/banner.png`,
        }
    }
}
</script>
<style scoped>
.banner{
    padding-top:14px;
    padding-bottom:71px;
}
.banner figure {
    margin: 0 0 18px;
}
.banner h2{
    font-size: 42px;
color: #000;
font-weight: 400;
font-style: italic;
line-height: 53px;
text-align: center;
font-family: Georgia;
margin: 0;
}
@media only screen and (max-width:992px){
    .banner h2 {
    font-size: 35px;
    line-height: 45px;
}
}

@media  only screen and (max-width:767px){
    .banner figure {
    margin: 0 0 9px;
}
.banner h2 {
    font-size: 24px;
    line-height: 32px;
}
}
</style>