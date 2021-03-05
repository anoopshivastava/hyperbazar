<template>
    <figure class="add_box">
                                <img :src="smalladd" alt="">
     </figure>
</template>
<script>
<<<<<<< HEAD
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
=======
>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2
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