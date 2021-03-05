<template>
    <footer id="footer">
            <div class="top_footer">
                <div class="container clearfix">
                    <div class="quick_menu">
                        <h4>QUICK LINKS</h4>
                        <ul class="footer_menu">
                            <li>
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Culture</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Fashion</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Celebrity</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Beauty</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Travel &amp; Food</a>
                            </li>
                        </ul>
                    </div>
                    <div class="quick_menu our_site">
                        <div class="flex_wrap">
                            <div class="our_site_menu">
                                <h4>OUR SISTER SITES</h4>
                                <ul class="footer_menu">
                                    <li>
                                        <a href="javascript:void(0)">Cosmopolitan</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Bride’s Today</a>
                                    </li>

                                </ul>
                            </div>
                            <div class="our_site_menu_right">
                                <ul class="footer_menu">
                                    <li>
                                        <a href="javascript:void(0)">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Advertisers</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Feedback</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Advertise with Us</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer_logo_right">
                        <a href="javascript:void(0)" class="footer_logo">
                            <img :src="footerlogo" alt="footerlogo">
                        </a>
                        <div class="footer_follow_us">
                            <label>
                                Follow us on: 
                             </label>
                            <a href="javascript:void(0)" class="">
                                <img :src="footerfacebook" alt="facebook">
                            </a>
                            <a href="javascript:void(0)" class="">
                                <img :src="footerinstagram" alt="instagram">
                            </a>
                            <a href="javascript:void(0)" class="">
                                <img :src="footertiwtter" alt="tiwtter">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom_footer">
                <div class="container">
                    <span>Copyright © 2021 Living Media India Limited. For reprint rights: Syndications Today. India Today Group.</span>
                </div>
            </div>

        </footer>
</template>

<script>
<<<<<<< HEAD
// import {RESOURCE_RELATIVE_PATH} from '../utils/constants'
=======

>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2

export default {
  name: 'Footer',
  data(){
       return {
<<<<<<< HEAD
                  footerlogo: `./images/footerlogo.png`,
                  footerfacebook: `./images/footericon1.png`,
                  footerinstagram: `./images/footericon2.png`,
                  footertiwtter: `./images/footericon3.png`,
=======
                  footerlogo: `/images/footerlogo.png`,
                  footerfacebook: `/images/footericon1.png`,
                  footerinstagram: `/images/footericon2.png`,
                  footertiwtter: `/images/footericon3.png`,
>>>>>>> cafe13869416d8bbbc315ab4aac2326d10a8cbf2
                 
              }
  }
  
}
</script>

<style>
@import '../assets/css/global.css';
.bottom_footer {
    background-color:#000;
    text-align:center;
    padding:15px 0
   }
   .bottom_footer span {
    font-size:13px;
    color:#fff;
    font-weight:400;
    display:inline-block;
    font-family:Georgia;
    line-height:17px
   }
   .top_footer {
    padding:24px 0 22px;
    background-color:#f6f6f6
   }
   .footer_logo_right {
    float:right;
    padding-right:77px
   }
   .footer_logo {
    padding:0 5px 20px;
    margin:0 0 12px;
    display:inline-block;
    border-bottom:1px solid #ddd
   }
   .footer_follow_us a,
   .footer_follow_us label {
    display:inline-block;
    vertical-align:middle
   }
   .footer_follow_us label {
    margin-right:32px;
    color:#9d9d9d;
    font-family:Georgia;
    font-weight:400;
    font-size:16px
   }
   .footer_follow_us a {
    margin-right:45px
   }
   .footer_follow_us a:last-child {
    margin-right:0
   }
   .top_footer h4 {
    font-size:14px;
    color:#000;
    font-weight:700;
    font-family:Georgia;
    text-transform:uppercase;
    margin:0 0 18px
   }
   .quick_menu {
    float:left;
    margin-left:50px;
    width:230px
   }
   .our_site {
    width:auto
   }
   .footer_menu {
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap
   }
   .our_site_menu {
    padding-right:34px;
    margin-right:46px;
    border-right:1px solid #ddd
   }
   .our_site .footer_menu {
    display:block
   }
   .footer_menu li {
    margin-bottom:15px;
    width:50%
   }
   .footer_menu li a,
   .footer_menu li a:hover {
    font-size:14px;
    display:inline-block;
    color:#000;
    font-weight:400;
    font-family:Georgia;
    text-decoration:none
   }
   .our_site .footer_menu li {
    width:100%
   }
   @media only screen and (max-width:1291px) {
    .quick_menu {
     margin-left:30px
    }
    .footer_logo_right {
     padding-right:30px
    }
    .footer_logo {
     width:300px
    }
   }
   @media only screen and (max-width:992px) {
    .quick_menu {
     margin-left:0;
     width:190px
    }
    .footer_logo_right {
     padding-right:0
    }
    .our_site_menu {
     padding-right:20px;
     margin-right:20px
    }
    .our_site {
     margin-left:20px;
     width:auto
    }
    .footer_logo {
     width:230px
    }
    .footer_follow_us a {
     margin-right:15px
    }
    .footer_follow_us label {
     margin-right:10px
    }
   }
   @media only screen and (max-width:767px) {
    .quick_menu {
     margin:0 0 10px;
     width:100%;
     float:none
    }
    .our_site {
     margin-left:0;
     width:100%
    }
    .our_site_menu {
     padding-right:0;
     margin-right:0;
     width:100%;
     border-right:none
    }
    .our_site_menu_right {
     width:100%
    }
    .our_site .flex_wrap {
     flex-wrap:wrap
    }
    .our_site .footer_menu {
     display:flex;
     padding:0 0 15px
    }
    .our_site .footer_menu li {
     width:50%;
     margin:0 0 19px
    }
    .footer_logo {
     display:none
    }
    .footer_logo_right {
     float:none
    }
    .footer_menu {
     padding:0 0 15px
    }
    .footer_follow_us label {
     margin:0 0 10px;
     display:block;
     text-align:center
    }
    .footer_follow_us {
     text-align:center;
     padding-top:8px;
     border-top:1px solid #ddd
    }
    .top_footer {
     padding:15px 0 20px
    }
    .bottom_footer span {
     font-size:12px
    }
    .footer_follow_us label {
     margin:0 0 17px;
     font-size:16px
    }
    .bottom_footer {
     padding:10px 0
    }
    .footer_follow_us a {
     margin:0 20px
    }
    .top_footer h4 {
     margin:0 0 20px
    }
   }
   
</style>
