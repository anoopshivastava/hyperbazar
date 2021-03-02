<template>
   <section class="content_wrapper">
                <div class="container">
                    <div class="content_inner">
                         <div class="content_left">
                             <slot>

                             </slot>
                          </div>
                         <div class="content_right">
                             <SmallAdd/>
                             <Read/>
                         </div>
                    </div>
                </div>   
   </section>
  
</template>

<script>
import Read from './Read.vue';
import SmallAdd from './SmallAdd.vue';

export default {
  name: 'ContentWrapper',
  components:{
    Read,
    SmallAdd,
  
  },
  data(){
       return {
                  
                 
              }
  }
  
}
</script>

<style>
 .content_wrapper {
    padding-bottom: 65px;
}
.content_inner {
    display: flex;
    justify-content: space-between;
}
.content_left {
    width: calc(100% - 325px);
}
.content_right {
    width: 300px;
}
@media only screen and (max-width:767px){
    .content_wrapper {
    padding-bottom: 32px;
}

.content_inner {
    display: block;
}
.content_left {
    width: 100%;
    margin: 0 0 29px;
}
.content_right {
    width: 300px;
    margin: 0 auto;
}
}
</style>
