<template>
    <section>
        <div class="container">
            <ul class="section_list">

                        <li>
                            <div class="list_detail">
                                <strong>Dec 15, 2020</strong>
                                <h3>Have You Read Your Fashion Horoscope Yet? face oils, and the skin types they suit</h3>
                                <p>The skincare market has become awash with face oils in recent years; whether you’re after firmer skin, a brighter glow or deeper hydration, there’s a formula promising to deliver.</p>
                                <span>By Racheel Burchfield</span>
                            </div>
                            <figure class="list_pic">
                                <img :src="section1" alt="">
                            </figure>
                        </li>
                        <li>
                            <div class="list_detail">
                                <strong>Dec 15, 2020</strong>
                                <h3>How to wear fragrance Like the Duchess of Sussex and Duchess of Cambridge</h3>
                                <p>There are a dizzying number of royal rules that must be observed if you're a member of the British monarchy. From the proper order of greetings.</p>
                                <span>By Emily Shiffer</span>
                            </div>
                            <figure class="list_pic">
                                <img :src="section2" alt="">
                            </figure>
                        </li>
                        <li>
                            <div class="list_detail">
                                <strong>Dec 15, 2020</strong>
                                <h3>Yousra Imran: "When I was growing up, wearing lipstick was a brave thing to do"</h3>
                                <p>The skincare market has become awash with face oils in recent years; whether you’re after firmer skin, a brighter glow or deeper hydration, there’s a formula promising to deliver.</p>
                                <span>By Racheel Burchfield</span>
                            </div>
                            <figure class="list_pic">
                                <img :src="section3" alt="crossIcon">
                            </figure>
                        </li>
                        <li>
                            <div class="list_detail">
                                <strong>Dec 15, 2020</strong>
                                <h3>This 6-move workout will make you a faster, stronger runner</h3>
                                <p>You might think that to become a better runner, you just need to keep running – the more miles the better.But not according to NYC-based running coach and Peloton Run, Ride and Strength trainer Robin Arzón.</p>
                                <span>By Emily Shiffer</span>
                            </div>
                            <figure class="list_pic">
                                <img :src="section4" alt="">
                            </figure>
                        </li>
                        <li>
                            <div class="list_detail">
                                <strong>Dec 15, 2020</strong>
                                <h3>Have You Read Your Fashion Horoscope Yet? face oils, and the skin types they suit</h3>
                                <p>Victoria Beckham may credit her enviable glow to her own beauty line, (and we can attest it is indeed impressive), but the designer is also known to indulge in a few innovative facial treatments.</p>
                                <span>By Roberta Schroeder</span>
                            </div>
                            <figure class="list_pic">
                                <img :src="section5" alt="">
                            </figure>
                        </li>
                        <li>
                            <div class="list_detail">
                                <strong>Dec 15, 2020</strong>
                                <h3>These were 2020’s most searched-for beauty buzzwords</h3>
                                <p>In the micro-climate of beauty, Google’s Year in Search – the search engine’s annual round-up of the most popular queries – demonstrates this perfectly.Where in 2019, the top trending topics were dominated by maximalist
                                    make-up trends,</p>
                                <span>By Emily Shiffer</span>
                            </div>
                            <figure class="list_pic">
                                <img :src="section6" alt="">
                            </figure>
                        </li>
                    </ul>
        </div>
    </section>
</template>
<script>
export default {
    name:'BeautyList',
    data(){
        return{
<<<<<<< HEAD
            section1: `./images/section1.png`,
            section2: `./images/section2.png`,
            section3: `./images/section3.png`,
            section4: `./images/section4.png`,
            section5: `./images/section5.png`,
            section6: `./images/section6.png`,
=======
            section1: `/images/section1.png`,
            section2: `/images/section2.png`,
            section3: `/images/section3.png`,
            section4: `/images/section4.png`,
            section5: `/images/section5.png`,
            section6: `/images/section6.png`,
>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2
        }
    }
}
</script>
<style scoped>
.section_list {
    margin: 0 0 54px;
    padding: 0;
    border-top:1px solid #ddd;
}
.section_list li {
    display: flex;
    justify-content: space-between;
    padding: 34px 0 36px;
    border-bottom: 1px solid #ddd;
    flex-wrap: wrap;
}
.list_detail {
    margin-right: 15px;
    width: calc(100% - 565px);
}
.list_detail strong {
    font-family: Georgia;
    display: block;
    font-size: 18px;
    color: #000;
    font-weight: 400;
    margin: 0 0 5px;
}
.list_detail h3 {
    font-family: Georgia;
    font-size: 32px;
    color: #000;
    line-height: 39px;
    font-weight: 400;
    margin: 0 0 15px;
}
.list_detail p {
    font-family: Georgia;
    font-size: 20px;
    color: #000;
    line-height: 28px;
    font-weight: 400;
    margin: 0 0 15px;
}
.list_detail span {
    font-family: Georgia;
    display: block;
    color: #666;
    font-size: 16px;
    font-weight: 400;
}
.list_pic {
    width: 550px;
}
.list_pic img {
    width: 100%;
}
@media only screen and (max-width:1291px){
.list_detail {
    width: calc(100% - 445px);
}
.list_detail h3 {
    font-size: 25px;
    line-height: 30px;
}
.list_detail p {
    font-size: 16px;
    line-height: 24px;
}
.list_pic {
    width: 430px;
}
}
@media only screen and (max-width:992px){
.list_detail {
    width: calc(100% - 315px);
}
.list_pic {
    width: 300px;
}
}
@media only screen and (max-width:767px){
    .section_list {
    margin: 0 0 30px;
}
.section_list li {
    padding: 24px 0 16px;
}
.list_detail {
    width: 100%;
    margin: 0;
}

.list_detail strong {
    font-size: 16px;
}
.list_detail h3 {
    font-size: 20px;
    line-height: 28px;
    margin: 0 0 20px;
}
.list_detail p, .list_detail span {
    display: none;
}
.list_pic {
    width: 100%;
}
}

</style>