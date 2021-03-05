<template>
    <section class="culture">
             <Heading/>
                <div class="container">
                    <div class="culture_top_sec">
                        <div class="culture_top_left">
                            <div class="culture_img">
                                <img :src="culturemain" alt="">
                            </div>
                            <div class="culture_text">
                                <p>Cara Delevingne delivers powerful climate change speech calling to protect the Amazon</p>
                            </div>
                        </div>
                        <div class="add_sec">
                            <img :src="addPic" alt="">
                        </div>
                    </div>
                    <div class="culture_list">
                        <div class="culture_cell">
                            <figure>
                                <img :src="culture1" alt="">
                            </figure>
                            <p>Inside the home of... artist Emily Powell</p>
                        </div>
                        <div class="culture_cell">
                            <figure>
                                <img :src="culture2" alt="">
                            </figure>
                            <p>43 of the most riveting, entertaining and documentaries on Netflix</p>
                        </div>
                        <div class="culture_cell">
                            <figure>
                                <img :src="culture3" alt="">
                            </figure>
                            <p>Kristen Stewart feels "protective" over Princess Diana</p>
                        </div>
                    </div>
                </div>
            </section>
</template>
<script>
import Heading from './Heading.vue'
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
export default {
    name:'CultureComponent',
      components:{
                   Heading
                },
    data(){
          return {
              culturemain:`./images/culturemain.png`,
               culture1: `./images/culture1.png`,
               culture2: `./images/culture2.png`,
               culture3: `./images/culture3.png`,
                 addPic: `./images/300x250.png`,
        }
    }
}
</script>
<style scoped>
.culture {
    padding-bottom: 101px;
    padding-top:80px;
}

.culture_top_left {
    width: calc(100% - 325px);
    display: flex;
}
.culture_top_sec {

    display: flex;
    justify-content: space-between;
    margin: 0 0 29px;

}
.culture_img, .culture_text {
    width: 50%;
}
.culture_img img {
    width: 100%;
    height: 100%;
}
.culture_text {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
    padding: 10px 35px;
    text-align: center;
}
.culture_text p {
    font-size: 35px;
    line-height: 45px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    margin: 0;
}
.culture_top_sec .add_sec {
    width: 300px;
    height: 250px;
    overflow: hidden;
}
.culture_top_sec .add_sec img {
    height: 100%;
    width: 100%;
}
.culture_list {
    display: flex;
    justify-content: space-between;
}
.culture_cell {
    display: flex;
    align-items: flex-start;
    width: calc(33.33% - 12px);
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 1px solid #d1d1d1;
}
.culture_list figure {
    width: 119px;
    height: 119px;
}
.culture_list figure img {
    width: 100%;
    height: 100%;
}
.culture_list p {
    font-size: 24px;
    line-height: 34px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    margin: 0;
    padding-left: 20px;
    width: calc(100% - 119px);
}

@media only screen and (max-width:1291px){

}
@media only screen and (max-width:1024px){
    .culture_text {
    padding: 10px 15px;
}
.culture_text p {
    font-size: 24px;
    line-height: 34px;
}
.culture_list p {
    font-size: 18px;
    line-height: 28px;
}
}
@media only screen and (max-width:992px){
    .culture {
    padding-bottom: 50px;
    padding-top:50px;
}
.culture_text p {
    font-size: 18px;
    line-height: 28px;
}
.culture_list figure {
    width: 80px;
    height: 80px;
}
.culture_list p {
    width: calc(100% - 80px);
}
}
@media only screen and (max-width:767px){
    .culture {
    padding-bottom: 10px;
    padding-top:30px;
}
.culture_top_sec {
    display: block;
}
.culture_top_left {
    width: 100%;
    display: block;
    margin: 0 0 30px;
}
.culture_img, .culture_text {
    width: 100%;
}

.culture_text {
    padding: 28px 15px;
}
.culture_text p {
    font-size: 20px;
    line-height: 28px;
}
.culture_top_sec .add_sec {
    margin: 0 auto 30px;
}

.culture_list {
    display: block;
}
.culture_cell {
    width: 100%;
    margin: 0 0 30px;
}
.culture_list figure {
    width: 121px;
    height: 121px;
}
.culture_list p {
    width: calc(100% - 121px);
    padding-left: 19px;
    line-height: 26px;
}
}


</style>