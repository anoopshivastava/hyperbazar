<template>
    <div>
        <ul class="author_list">
                                <li>
                                    <div class="clearfix">
                                        <figure>
                                            <img :src="authorpic1" alt="back">
                                        </figure>
                                        <div class="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Jennifer Lopez's JLo Beauty Is Here—See Every Product</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="clearfix">
                                        <figure>
                                            <img :src="authorpic2" alt="back">
                                        </figure>
                                        <div class="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Beauty Industry Legend Leonard Lauder Opens Up About His Mother Esteé in New Memoir</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="clearfix">
                                        <figure>
                                            <img :src="authorpic3" alt="back">
                                        </figure>
                                        <div class="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Natalie Portman Says That "Being Sexualized as a Child" Made Her Feel "Unsafe"</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="clearfix">
                                        <figure>
                                            <img :src="authorpic4" alt="back">
                                        </figure>
                                        <div class="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Helen Mirren on Aging 'Disgracefully,' Quarantine Makeup, and Staying Fit</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="clearfix">
                                        <figure>
                                            <img :src="authorpic5" alt="back">
                                        </figure>
                                        <div class="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>How Bazaar editors use their beauty routines to boost their mental wellbeing</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="clearfix">
                                        <figure>
                                            <img :src="authorpic6" alt="back">
                                        </figure>
                                        <div class="author_detail">
                                            <span>Dec 16, 2020</span>
                                            <p>Queen's Gambit star Anya Taylor-Joy says she's "not beautiful enough to be in films"</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
    </div>
</template>
<script>
<<<<<<< HEAD
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
=======
>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2
export default {
    name:'CelebrityList',
     data(){
        return {
<<<<<<< HEAD
            authorpic1: `./images/authorpic1.png`,
            authorpic2: `./images/authorpic2.png`,
            authorpic3: `./images/authorpic3.png`,
            authorpic4: `./images/authorpic4.png`,
            authorpic5: `./images/authorpic5.png`,
            authorpic6: `./images/authorpic6.png`,
=======
            authorpic1: `/images/authorpic1.png`,
            authorpic2: `/images/authorpic2.png`,
            authorpic3: `/images/authorpic3.png`,
            authorpic4: `/images/authorpic4.png`,
            authorpic5: `/images/authorpic5.png`,
            authorpic6: `/images/authorpic6.png`,
>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2

        } 
    }
}
</script>
<style scoped>
.author_list li {
    margin: 0 0 38px;
    padding: 0 0 38px;
    border-bottom: 1px solid #ddd;
}
.author_list li figure {
    float: left;
    width: 414px;
    height: 234px;
    margin-right: 30px;
}
.author_detail {
    float: left;
    width: calc(100% - 444px);
}
.author_detail span {
    font-size: 18px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    margin: 0 0 16px;
    display: block;
}
.author_detail p {
    font-size: 32px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    margin: 0;
    line-height: 39px;
}
@media only screen and (max-width:1291px){
.author_list li figure{
    width: 300px;
    height: auto;
    margin-right: 20px;
}
.author_detail {
    width: calc(100% - 320px);
}
}
@media only screen and (max-width:992px){
    .author_list li figure {
    width: 100%;
    float: none;
    margin: 0 0 20px;
}
.author_list li figure img {
    width: 100%;
}
.author_detail {
    width: 100%;
    float: none;
}
.author_detail p {
    font-size: 24px;
    line-height: 28px;
}
}

@media only screen and (max-width:767px){
    .author_list {
    margin: 0 -10px;
}
.author_list li {
    margin: 0 0 30px;
    padding: 0 0 20px;
}
.author_list li figure {
    margin: 0 0 18px;
}
.author_detail {
    padding: 0 10px;
}
.author_detail span {
    font-size: 16px;
}
.author_detail p {
    font-size: 20px;
    line-height: 28px;
}
}
</style>