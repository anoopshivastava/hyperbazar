<template>
   <section class="fashion">
               <Heading headtitle="FASHION"/>
                <div class="container">
                    <div class="fashion_wrap">
                        <div class="fashion_cell">
                            <figure>
                                <img :src="fashion1" alt="">
                            </figure>
                            <p>
                                The best leather shirts to wear all winter long
                            </p>
                        </div>
                        <div class="fashion_cell">
                            <figure>
                                <img :src="fashion2" alt="">
                            </figure>
                            <p>
                                Zendaya is the new face of Maison Valentino
                            </p>
                        </div>
                        <div class="fashion_cell">
                            <figure>
                                <img :src="fashion3" alt="">
                            </figure>
                            <p>
                                Natacha Ramsay-Levi is leaving Chloé after four years at the helm
                            </p>
                        </div>
                        <div class="fashion_cell">
                            <figure class="add_fashion">
                                <img :src="fashionadd" alt="">
                            </figure>
                            <figure>
                                <img :src="fashion4" alt="">
                            </figure>
                            <p>
                                The Duchess of Cambridge has the world’s most popular engagement ring
                            </p>
                        </div>
                    </div>
                </div>
            </section> 
</template>
<script>
import Heading from './Heading.vue'
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
export default {
    name:'FashionComponent',
      components:{
                   Heading
                },
    data(){
          return {
              fashion1:`./images/fashion1.png`,
               fashion2: `./images/fashion2.png`,
               fashion3: `./images/fashion3.png`,
               fashion4: `./images/fashion4.png`,
               fashionadd: `./images/fashionadd.png`,
        }
    }
}
</script>
<style scoped>
.fashion {
    margin: 44px 0 85px;
}
.fashion_wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.fashion_cell {
    width: calc(25% - 14px);
    text-align: center;
}
.fashion_cell figure {
    margin: 0 0 10px;
}
.fashion_cell p {
    font-size: 30px;
    line-height: 40px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    margin: 0;
}
.fashion_cell figure.add_fashion {
    margin: 0 0 29px;
    overflow: hidden;
    min-height: 250px;
}
.fashion_cell figure.add_fashion img {
    height: 100%;
    width: 100%;
}

@media only screen and (max-width:1291px){
    .fashion_cell p {
    font-size: 24px;
    line-height: 28px;
}
}
@media only screen and (max-width:1024px){
    
}
@media only screen and (max-width:992px){
    
}
@media only screen and (max-width:767px){
    .fashion {
    margin: 32px  0 0;
}
.fashion_cell {
    width: 100%;
    margin: 0 0 30px;
}
.fashion_cell p {
    font-size: 20px;
    line-height: 28px;
}
}
</style>