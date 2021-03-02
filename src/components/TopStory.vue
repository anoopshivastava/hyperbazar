<template>
    <div class="top_story">
        <h1>After Brandon Bernard's Execution, Sister Helen Prejean Calls Out the Death Penalty's Cruelty</h1>
    <span>"If you want to see a capricious, arbitrary application of death in the hands of very flawed human beings, here it is," the nun and anti-death penalty advocate tells BAZAAR.</span>
     <div class="user_profile">
            <figure>
                <img :src="userpic" alt="">
            </figure>
            <i>Dec 15, 2020 | by Anupriya Roy   </i>
    </div>
    </div>
</template>
<script>
export default {
    name:'TopStory',
      data(){
       return {
                  userpic: `/images/userpic.png`,
                 
                 
              }
  }
}
</script>
<style scoped>
.top_story h1 {
    font-size: 37px;
    color: #000;
    font-family: Georgia;
    font-weight: 700;
    margin: 0 0 20px;
    line-height: 43px;
}
.top_story span {
    font-size: 20px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    display: block;
    line-height: 30px;
    margin: 0 0 15px;
}
.user_profile {
    margin: 0 0 20px;
}
.user_profile figure {
    display: inline-block;
    width: 52px;
    height: 49px;
    margin-right: 10px;
    vertical-align: middle;
}
.user_profile i {
    vertical-align: middle;
    display: inline-block;
    font-style: italic;
    font-size: 18px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    width: calc(100% - 70px);
}
@media only screen and (max-width:992px){
.top_story h1 {
    font-size: 28px;
    line-height: 32px;
}

}
@media only screen and (max-width:767px){
   .top_story h1 {
    font-size: 20px;
    line-height: 28px;
    margin: 0 0 10px;
}
 .top_story  span {
    line-height: 28px;
    margin: 0 0 10px;
} 
.user_profile {
    margin: 0 0 16px;
}
.user_profile i {
    font-size: 16px;
}
}
</style>