<template>
    <div class="author_head">
        <h2>1,500 Results for ‘Beauty’</h2>
        <div class="update_tab">
            <a href="javascript:void(0)">Oldest</a>
            <a href="javascript:void(0)" class="active">Newest</a>
        </div>
   </div>
</template>
<script>
export default {
    name:'TopHeading'
}
</script>
<style scoped>
.author_head {
    padding: 0 0 30px;
    margin: 0 0 40px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
}
.author_head h2 {
    font-size: 20px;
    color: #000;
    font-family: Georgia;
    font-weight: 700;
    margin: 0;
}
.update_tab {
    border: 1px solid #000;
}
.update_tab a {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    font-size: 16px;
    color: #000;
    width: 80px;
    font-family: Georgia;
    font-weight: 700;
    text-align: center;
    line-height: 25px;
}
.update_tab a.active {
    background-color: #000;
    color: #fff;
}

@media only screen and (max-width:767px){
    .author_head {
    flex-wrap: wrap;
    margin: 0 0 25px;
}
.author_head h2 {
    font-size: 20px;
    margin: 0 0 22px;
    width: 100%;
}
}
</style>