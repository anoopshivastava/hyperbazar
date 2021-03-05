<template>
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
        <div class="bottomheader">
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


                    <a href="javascript:void(0)" class="searchicon">
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
              }
  }
  
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
</style>
