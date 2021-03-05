<template>
    <a href="javascript:void(0)" class="load_more">Load More</a>
</template>
<script>
export default {
    name:'Button'
}
</script>
<style scoped>
.load_more, .load_more:hover {
    display: block;
    width: 218px;
    height: 67px;
    border-radius: 40px;
    margin: 0 auto;
    border: 1px solid #000;
    font-size: 26px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    line-height: 65px;
    text-align: center;
    padding: 0 5px;
    text-decoration: none;
}
@media only screen and (max-width:767px){
    .load_more, .load_more:hover {
            width: 143px;
            height: 44px;
            font-size: 20px;
            line-height: 42px;
    }
}
</style>