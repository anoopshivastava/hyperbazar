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




<div class="humburger_overlay" :class="mobilemenu ? 'active' : ''" >
            <div class="menu_wrapper">
                <div class="mobile_header_top">
                    <a href="javascript:void(0)" class="mobile_logo">
                        <img :src="mobilelogo" alt="">
                    </a>
                    <a href="javascript:void(0)" class="cross_menu" v-on:click="closeState">
                        <img :src="cross" alt="crossIcon">
                    </a>

                </div>


                <nav class="mobile_menu">
                        <router-link to="/">HOME</router-link>
                        <router-link to="/Fashion">FASHION</router-link>
                        <router-link to="/Beauty">BEAUTY</router-link>
                        <router-link to="/Culture">CULTURE</router-link>
                        <router-link to="/Celebrity">CELEBRITY</router-link>
                        <router-link to="/Travel">TRAVEL AND FOOD</router-link>
                </nav>
            </div>
        </div>












    <header id="header"> 
        <div class="upperheader">
           <div class="container relative" >
                <a href="javascript:void(0)" class="logo">
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


            <div class="mobile_header">
                <a href="javascript:void(0)" class="menu_icon"  v-on:click="openState">
                    <img :src="menu" alt="menu">
                </a>
                <a href="javascript:void(0)" class="logo">
                    <img :src="logo" alt="logo">
                </a>

                <a href="javascript:void(0)" class="searchicon" v-on:click="searchshow">
                    <img :src="search" alt="logo">
                </a>
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
                     menu: `./images/menu_icon.png`,
                   mobilelogo: `./images/mobile_logo.png`,
                  facebook: `./images/facebook.png`,
                  instagram: `./images/instrgram.png`,
                  tiwtter: `./images/twitter.png`,
                  strickyLogo:`./images/stricylogo.png`,
                  search:`./images/search.png`,
                  cross:`./images/cross.png`,
                  inputsearchicon:`./images/inputsearchicon.png`,
                  stricyHader:false,
                  showSearch:false,
                  mobilemenu:false

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
            openState(){
                this.mobilemenu = true
            },
            closeState(){
                this.mobilemenu = false
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
.humburger_overlay.active{
display:block;
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

/* Mobile Header */
.mobile_header {
    display: none;
}

@media only screen and (max-width:1291px){
    .menu a, .menu a:hover {
    font-size: 16px;
    margin-right: 15px;
}
.searchicon {
    right: 10px;
    width: 20px;
}
}
@media only screen and (max-width:992px){
    .logo {
    display: inline-block;
    height: 60px;
    width: 200px;
}
.follow_us a, .follow_us label {
    margin-right: 15px;
}
.menu a, .menu a:hover {
    font-size: 14px;
    margin-right: 5px;
    padding: 10px 5px;
}
.menu a:hover:last-child, .menu a:last-child {
    margin-right: 0;
}
.strickylogo {
    width: 120px;
    height: 34px;
    margin-right: 20px;
}
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



/* Mobile Header */
#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}
.bottomheader, .upperheader {
    display: none;
}
.mobile_header {
    background: #f6f6f6;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    padding: 10px;
}

.mobile_header a.menu_icon {
    margin-right: 18px;
}
.mobile_header a {
    display: inline-block;
    vertical-align: middle;
}

.mobile_header .logo {
    width: 126px;
    height: auto;
}

.searchicon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 31px;
    height: 31px;
}

.humburger_overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 99999;
    background: rgba(0,0,0,.6);
}

.menu_wrapper {
    background: #242424;
    width: 250px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    overflow: auto;
}
.mobile_header_top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    padding: 18px 18px;
}
.mobile_logo {
    display: inline-block;
    width: 147px;
}
.cross_menu {
    display: inline-block;
    width: 17px;
}
.mobile_menu a {
    display: block;
    width: 100%;
    padding: 17px 18px;
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    font-family: Georgia;
    text-decoration: none;
    border-bottom: 1px solid #505050;
}
.mobile_menu a:last-child {
    border-bottom: none;
}




/* Mobile Header */
.mobile_header {
    background: #f6f6f6;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    padding: 10px;
}


}

</style>
