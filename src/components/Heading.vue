<template>
    <h1 class="tittle_text"><span>FASHION</span></h1>
</template>
<script>
export default {
    name:'Heading'
}
</script>
<style scoped>
.tittle_text {
    font-family: Georgia;
    font-style: italic;
    color: #000;
    font-size: 72px;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    margin: 0 0 22px;
    padding-left: 109px;
}
.tittle_text span {
    background: #fff;
    position: relative;
    display: inline-block;
    z-index: 99;
}
.tittle_text::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    height: 1px;
    background: #000;
}

@media only screen and (max-width:767px){
    .tittle_text {
    font-size: 35px;
    margin: 0 0 14px;
    padding-left: 17px;
}
}

</style>