<template>
    <section class="fashion Celebrity">
                <Heading/>
                <div class="container">
                    <div class="fashion_wrap">
                        <div class="fashion_cell">
                            <figure>
                                <img :src="cel1" alt="">
                            </figure>
                            <p>
                                George Clooney says he and Amal didn't plan to get married or have children
                            </p>
                        </div>
                        <div class="fashion_cell">
                            <figure>
                                <img :src="cel2" alt="">
                            </figure>
                            <p>
                                Jane Fonda &amp; Peggy Shepard Record the 'Dare I Say' Podcast Live
                            </p>
                        </div>
                        <div class="fashion_cell">
                            <figure>
                                <img :src="cel3" alt="">
                            </figure>
                            <p>
                                Kendall Jenner Debuts H&amp;M x Giambattista Valli Collab at Cannes
                            </p>
                        </div>
                        <div class="fashion_cell">

                            <figure>
                                <img :src="cel4" alt="">
                            </figure>
                            <p>
                                Lily-Rose Depp Hits It Right on the Nose in Chanel
                            </p>
                        </div>
                    </div>
                </div>
            </section>
</template>
<script>
import Heading from './Heading.vue';
export default {
    name:'CelebrityComponent',
     components:{
                 Heading
                },
    data(){
        return{
               cel1: `/images/cel1.png`,
               cel2: `/images/cell2.png`,
               cel3: `/images/cell3.png`,
               cel4: `/images/cell4.png`,
        }
    }
}
</script>
<style scoped>
.Celebrity {
    margin: 0 0 93px;
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
    margin: 0 0 15px;
}
.fashion_cell p {
        font-size: 24px;
        color: #000;
        font-family: Georgia;
        font-weight: 400;
        margin: 0;
        line-height: 34px;
}
@media only screen and (max-width:1291px){
.fashion_cell p {
    font-size: 24px;
    line-height: 28px;
}
}
@media only screen and (max-width:992px){
    
}
@media only screen and (max-width:767px){
    .fashion {
    margin: 0;
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