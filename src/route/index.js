import { createWebHistory, createRouter } from "vue-router";

import Home from '../components/Home.vue'
import Fashion from '../components/Fashion.vue'
import Travel from '../components/Travel.vue'
import Culture from '../components/Culture.vue'
import Beauty from '../components/Beauty.vue'
import Celebrity from '../components/Celebrity.vue'



const routes = [
    {path:'/', component:Home},
    {path:'/Fashion', component:Fashion},
    {path:'/Travel', component:Travel},
    {path:'/Culture', component:Culture},
    {path:'/Beauty', component:Beauty},
    {path:'/Celebrity', component:Celebrity},
]




const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;