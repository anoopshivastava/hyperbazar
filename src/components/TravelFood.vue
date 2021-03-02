<template>
    <section class="travel_food">
               <Heading/>
                <div class="container">
                    <div class="travel_inner">
                        <div class="travel_left">
                            <figure>
                                <img :src="foodmain" alt="">
                            </figure>
                            <p>Lonely Planet names the world's best sustainable travel destinations</p>
                        </div>
                        <div class="travel_right">
                            <ul class="travel_list">
                                <li>
                                    <figure>
                                        <img :src="food1" alt="">
                                    </figure>
                                    <p>16 best Airbnbs with hot tubs to check into this year</p>
                                </li>
                                <li>
                                    <figure>
                                        <img :src="food2" alt="">
                                    </figure>
                                    <p>Private-jet bookings are up ahead of new England lockdown</p>
                                </li>
                                <li>
                                    <figure>
                                        <img :src="food3" alt="">
                                    </figure>
                                    <p>10 glorious hotels with outdoor pools for an alfresco dip in the country</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
</template>
<script>
import Heading from './Heading.vue'
export default {
    name:'TravelFood',
     components:{
                   Heading
                },
   data(){
        return{
               foodmain: `/images/foodmain.png`,
               food1: `/images/food1.png`,
               food2: `/images/food2.png`,
               food3: `/images/food3.png`,
        }
    }
}
</script>
<style scoped>
.travel_inner {
    display: flex;
    justify-content: space-between;
    align-items: top;
    flex-wrap: wrap;
}
.travel_left {
    width: calc(100% - 560px);
    text-align: center;
}
.travel_left figure {
    margin: 0 0 20px;
}
.travel_left p {
    font-size: 35px;
    line-height: 45px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
}
.travel_right {
    width: 530px;
}
.travel_list li {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 27px;
    margin-bottom: 27px;
    border-bottom: 1px solid #ddd;
}
.travel_list li figure {
    width: 122px;
    height: 122px;
    display: inline-block;
    vertical-align: top;
}
.travel_list li p {
    font-size: 24px;
    line-height: 34px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    display: inline-block;
    vertical-align: top;
    padding-left: 14px;
    width: calc(100% - 122px);
}
.travel_list li:last-child {
    margin: 0;
}

@media only screen and (max-width:1291px){
.travel_left p {
    font-size: 28px;
    line-height: 38px;
}
}
@media only screen and (max-width:1024px){
    .travel_left {
    width: calc(100% - 460px);
}
.travel_right {
    width: 430px;
}
}
@media only screen and (max-width:992px){
    .travel_left {
    width: calc(100% - 460px);
}
.travel_right {
    width: 430px;
}
}
@media only screen and (max-width:767px){
    .travel_left {
    width: 100%;
    margin: 0 0 22px;
}
.travel_left p {
    font-size: 20px;
    line-height: 28px;
}
.travel_right {
    width: 100%;
}
.travel_list li {
    margin: 0 0 23px;
    padding: 0 0 23px;
}
.travel_list li p {
    font-size: 18px;
    line-height: 26px;
}

}
</style>