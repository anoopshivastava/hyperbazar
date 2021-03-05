<template>
    <h4>Must Read</h4>
    <div class="right_card">
        <figure><img :src="sidePic1" alt="card"></figure>
        <p>How Kate and Meghan Are Staying Fit in Quarantine</p>
    </div>
    <div class="right_card">
        <figure><img :src="sidePic2" alt="card"></figure>
        <p>YSL Just Dropped a Zoë Kravitz Lipstick Collection</p>
    </div>
    <div class="right_card">
        <figure><img :src="sidePic3" alt="card"></figure>
        <p>These 14 Black-Owned Activewear Brands Will Stand Out in Your Workout Wardrobe</p>
    </div>
    <div class="right_card">
        <figure><img :src="sidePic4" alt="card"></figure>
        <p>The Duchess of Cambridge has the world’s most popular engagement ring</p>
    </div>
</template>
<script>
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
export default {
    name:'Read',
     data(){
       return {
                  sidePic1: `./images/sidePic1.png`,
                  sidePic2: `./images/sidePic2.png`,
                  sidePic3: `./images/sidePic3.png`,
                  sidePic4: `./images/sidePic4.png`,
                 
              }
  }
}
</script>
<style scoped>
 h4 {
    font-size: 20px;
    color: #000;
    font-family: Georgia;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 18px;
}
.right_card {
    margin: 0 0 26px;
}
.right_card figure {
    margin: 0 0 5px;
}
.right_card p {
    font-size: 18px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    line-height: 24px;
}
@media only screen and (max-width:992px){
            .right_card {
                margin: 0 0 15px;
            }
            .right_card p {
    font-size: 16px;
}
}
@media only screen and (max-width:767px){
    .right_card {
        margin: 0 0 24px;
    } 
    .right_card figure {
    text-align: center;
    margin: 0 0 10px;
}
.right_card p {
    font-size: 18px;
    line-height: 24px;
}
}

</style>