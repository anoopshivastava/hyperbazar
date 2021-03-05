<template>
    <figure class="add_box">
                                <img :src="smalladd" alt="">
     </figure>
</template>
<script>
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
export default {
    name:"SmallAdd",
     data(){
        return {
            smalladd: `/images/300x250.png`,
        }
    }
}
</script>
<style scoped>
.add_box {
    margin: 0 0 20px;
    min-height: 250px;
}
</style>