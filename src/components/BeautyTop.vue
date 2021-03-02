<template>
  <div class="beauty_top">
          <figure>
                <img :src="sectionMain" alt="">
          </figure>
          <h3>After Brandon Bernard's Execution, Sister Helen Prejean Calls Out the Death Penalty's Cruelty</h3>
  </div>
</template>
<script>
export default {
    name:'BeautyTop',
    data(){
        return{
            sectionMain:`/images/sectionMain.png`,
        }
    }
}
</script>
<style scoped>
.beauty_top {

}
.beauty_top h3{
font-size: 37px;
font-weight: 700;
color: #000;
line-height: 43px;
font-family: Georgia;
text-align: center;
margin: 0;
}
.beauty_top figure{
    margin: 0 0 10px;
}


@media only screen and (max-width:1291px){
.beauty_top h3 {
    font-size: 25px;
    line-height: 30px;
}
}
@media only screen and (max-width:992px){
    .beauty_top h3 {
    font-size: 22px;
}
}
@media only screen and (max-width:767px){
    .beauty_top h3 {
    font-size: 24px;
    line-height: 32px;
}
}
</style>