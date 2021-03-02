<template>
            <div class="add_wrapper">
                <img :src="add" alt="add">
            </div>
</template>
<script>
export default {
    name:'Add',
    data(){
        return {
            add: `/images/add.png`,
        }
    }
}
</script>
<style scoped>
.add_wrapper {
    height: 90px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
}
@media only screen and (max-width:767px){
    .add_wrapper {
    height: 250px;
    width: 300px;
    margin: 14px auto 0;
}
.add_wrapper img {
    width: 100%;
    height: 100%;
}
}
</style>