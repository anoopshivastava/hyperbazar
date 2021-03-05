<template>

   <div class="overlay" v-if="showSearch">
            <div class="container">
                <div class="search_box">
                    <div class="search_text">
                        <label>Search Here</label>
                        <a href="javascript:void(0)" class="cross" v-on:click="hideSearch">
                            <img :src="cross" alt="crossIcon">
                        </a>
                    </div>
                    <div class="inputwrapper relative">
                        <input type="text" placeholder="Type your keyword(s) here...">
                        <a href="javascript:void(0)" class="search_input" >
                            <img :src="inputsearchicon" alt="search">
                        </a>
                    </div>
                </div>
            </div>
        </div>

    <header id="header"> 
        <div class="upperheader">
           <div class="container relative" >
                <a href="javascript:void(0)">
                    <img :src="logo" alt="logo"/>
                </a>
                <div class="follow_us">
                        <label>
                            Follow us on: 
                         </label>
                        <a href="javascript:void(0)" class="">
                            <img :src="facebook" alt="facebook">
                        </a>
                        <a href="javascript:void(0)" class="">
                            <img :src="instagram" alt="instagram">
                        </a>
                        <a href="javascript:void(0)" class="">
                            <img :src="tiwtter" alt="tiwtter">
                        </a>
                </div>
           </div>
        </div>
        <div class="bottomheader"   :class="stricyHader ? 'fixed' : ''"  ref="headerscroll">
                <div class="container relative flex_wrap">
                    <a href="javascript:void(0)" class="strickylogo">
                        <img :src="strickyLogo" alt="logo">
                    </a>
                    <nav class="menu">
                        <router-link to="/">HOME</router-link>
                        <router-link to="/Fashion">FASHION</router-link>
                        <router-link to="/Beauty">BEAUTY</router-link>
                        <router-link to="/Culture">CULTURE</router-link>
                        <router-link to="/Celebrity">CELEBRITY</router-link>
                        <router-link to="/Travel">TRAVEL AND FOOD</router-link>
                    </nav>


                    <a href="javascript:void(0)" class="searchicon" v-on:click="searchshow">
                        <img :src="search" alt="search">
                    </a>
                </div>
            </div>
    </header>
</template>

<script>
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'

export default {
  name: 'Header',
  data(){
       return {
                  logo: `./images/logo.png`,
                  facebook: `./images/facebook.png`,
                  instagram: `./images/instrgram.png`,
                  tiwtter: `./images/twitter.png`,
                  strickyLogo:`./images/stricylogo.png`,
                  search:`./images/search.png`,

                  cross:`./images/cross.png`,
                  inputsearchicon:`./images/inputsearchicon.png`,
                  stricyHader:false,
                  showSearch:false

              }
  },
   mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
 
  unmounted() {
    window.removeEventListener('scroll', this.onScroll);
  },
    methods:{
            searchshow(){
                this.showSearch = true
            },
            hideSearch(){
                 this.showSearch = false
            },
         
            onScroll() {
     console.log(this.$refs["headerscroll"].offsetTop)
    const headerOffset = this.$refs["headerscroll"].offsetTop
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition > headerOffset) {
       console.log("stricky")
       this.stricyHader = true
    }
    else{
        console.log("normal")
         this.stricyHader = false
    }
  }
            
 },

   
 
}
</script>

<style>
 @import '../assets/css/global.css';

.humburger_overlay {
    display: none;
}
.mobile_header {
    display: none;
}
.upperheader {
    padding: 20px 0 7px;
    background: #fff;
    text-align: center;
}
.logo {
    display: inline-block;
    height: 76px;
    width: 267px;
}
.bottomheader {
    background: #f6f6f6;
}
.menu a,
.menu a:hover {
    display: inline-block;
    padding: 17px 12px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    font-family: Georgia;
    margin-right: 24px;
    text-decoration: none;
    position: relative;
}
.menu a.router-link-active::after,
.menu a:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 4px;
    background: #b30010;
}
.menu a:hover:last-child,
.menu a:last-child {
    margin-right: 0;
}
.searchicon {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
.follow_us {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.follow_us a,
.follow_us label {
    display: inline-block;
    vertical-align: middle;
}
.follow_us label {
    font-size: 16px;
    font-family: Georgia;
    font-weight: 400;
    color: #000;
    margin-right: 23px;
}
.follow_us a {
    margin-right: 38px;
}
.follow_us a:last-child {
    margin-right: 0;
}
.strickylogo {
    width: 152px;
    height: 42px;
    margin-right: 36px;
    margin-top: 8px;
    display: none;
}
.fixed {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
}
.fixed .strickylogo {
    display: block;
}





.overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 999999;
}
.search_box {
    padding-top: 174px;
}
.search_text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 30px;
}
.search_text label {
    font-size: 40px;
    color: #fff;
    font-family: Georgia;
    font-weight: 400;
}
.cross {
    display: inline-block;
}
.relative {
    position: relative;
}
.inputwrapper input {
    width: 100%;
    border: 1px solid #fff;
    background: #fff;
    border-radius: 50px;
    color: #000;
    font-family: Georgia;
    font-weight: 400;
    height: 64px;
    line-height: 64px;
    padding: 0 74px 0 20px;
    font-size: 30px;
}
.search_input {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 32px;
    display: inline-block;
}


@media only screen and (max-width:767px){
    .search_box {
    padding-top: 85px;
}
.search_text {
    margin: 0 0 8px;
}
.search_text label {
    font-size: 30px;
}
.cross {
    width: 18px;
}
.inputwrapper input {
    height: 40px;
    line-height: 38px;
    padding: 0 45px 0 15px;
    font-size: 17px;
}
.search_input {
    width: 22px;
    right: 16px;
}
}

</style>
