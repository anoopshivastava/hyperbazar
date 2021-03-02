<template>
    <div class="gallery">
                                <div class="gallery_box">
                                    <figure class="one">
                                        <img :src="photo1" alt="">
                                        <div class="pic_count">

                                            <i><img :src="camera" alt=""></i>
                                            <span>1/10</span>

                                        </div>
                                    </figure>
                                    <h3>Standout Trends from the Spring 2021 Runways to Shop Now</h3>
                                    <p>Fashion Month showcased a brave new world of digital enterprises, from Insta releases, to livestreamed shows, artful videos, titans of the industry in conversation on YouTube, and socially distanced in-person runways.
                                        It was designers adapting to the moment, </p>
                                </div>
                                <div class="gallery_box gallery_box_center">
                                    <figure class="two">
                                        <img :src="photo2" alt="">
                                        <div class="pic_count">

                                            <i><img :src="camera" alt=""></i>
                                            <span>2/10</span>

                                        </div>
                                    </figure>
                                    <h3>The best-laid plans </h3>
                                    <p>Sister Helen Prejean, a Catholic nun and one of the most well-known anti-death penalty advocates, spoke to Bernard and his legal team moments before the execution was carried out. </p>
                                </div>
                                <div class="gallery_box">
                                    <figure class="three">
                                        <img :src="photo3" alt="">
                                        <div class="pic_count">

                                            <i><img :src="camera" alt=""></i>
                                            <span>3/10</span>

                                        </div>
                                    </figure>
                                    <h3>Five Jewelry Trends Worth Investing In for 2021</h3>
                                    <p>In a year that had many extolling the virtues of sweatpants and shunning fancy garments altogether, wearing jewelry while sequestered at home seemed abnormal. </p>
                                </div>
                            </div>
</template>
<script>
export default {
    name:'PhotoContent',
     data(){
        return {
            photo1: `/images/photo1.png`,
            photo2: `/images/photo2.png`,
            photo3: `/images/photo3.png`,
            camera:`/images/camera.png`

        } 
    }
}
</script>
<style scoped>
.gallery_box {
    padding: 0 0 33px;
    margin: 0 0 31px;
    border-bottom: 1px solid #ddd;
}
.gallery_box figure {
    text-align: center;
    position: relative;
    margin: 0 0 18px;
}
.gallery_box figure > img{
    height: 100%;
    width: 100%;
}
.gallery_box h3 {
    font-size: 20px;
    color: #000;
    font-family: Georgia;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 10px;
    line-height: 28px;
}
.gallery_box p {
    font-size: 20px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
}
.pic_count {
    width: 61px;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0,0,0,.5);
    text-align: center;
    padding: 8px 0;
}
.pic_count i {
    margin: 0 0 4px;
    display: block;
    text-align: center;
}
.pic_count span {
    display: block;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    font-family: Merriweather,serif;
    margin: 0;
    line-height: 1;
}
.gallery_box_center {
    border: none;
    padding: 0;
    margin: 0 0 55px;
}
.gallery_box figure.two {
    width: 598px;
    margin: 0 auto 20px;
}


@media only screen and (max-width:1291px){
.gallery_box figure.two {
    min-height: auto;
}
.gallery_box figure.one {
    min-height: auto;
}
.pic_count {
    right: 0;
    bottom: 0;
}
}
@media only screen and (max-width:992px){
    .gallery_box figure.two {
    width: 100%;
}

}
@media only screen and (max-width:767px){
    
}
</style>