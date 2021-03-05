<template>
           <div class="nevigation_section">
                <div class="container">
                    <a href="javascript:void(0)" class="active">Home  </a>
                    <span> <img :src="backarrow" alt="back"></span>
                    <a href="javascript:void(0)">Beauty</a>
                </div>
            </div>
</template>
<script>
<<<<<<< HEAD
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
=======
>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2
export default {
    name:'Navigation',
     data(){
        return {
<<<<<<< HEAD
            backarrow: `./images/backarrow.png`,
=======
            backarrow: `/images/backarrow.png`,
>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2
        } 
    }
}
</script>
<style scoped>
.nevigation_section {
    padding: 20px 0 26px;
}

.nevigation_section a, .nevigation_section span {
    display: inline-block;
    vertical-align: middle;
    margin-right: 7px;
}
.nevigation_section a {
    font-size: 16px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    text-decoration: none;
}
.nevigation_section a.active {
    color: #b30010;
}

</style>