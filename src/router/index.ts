import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'
import UserPage from '@/views/UserPage.vue'
import CurrencyPage from '@/views/CurrencyPage.vue'
import {supabase} from '../clients/supabase.js'
let localUser;

// import CurrencyPage from '../views/CurrencyPage.vue'
import CurrencyHistory from '../views/CurrencyHistory.vue'
import Profile from '../views/Profile.vue'
import Profile2 from '../views/Profile2.vue'
import CurrencyPageVue from '@/views/CurrencyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/UserPage',
      name: 'UserPage',
      component: () => import('../views/UserPage.vue'),
      meta:{requiresAuth: true}
    },

    {
      path: '/Login',
      name: 'login',
      component: Login,
    },

    {
      path: '/SignUp',
      name: 'signUp',
      component: SignUp,
    },

    {
      path: '/CurrencyPage',
      name: 'currencyPage',
      component: CurrencyPage
    },

    {
      path: '/CurrencyHistory',
      name: 'currencyHistory',
      component: CurrencyHistory
    },

    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/Profile2',
      name: 'profile2',
      component: Profile2
    },
    
  ]
})

async function getUser(next){
  localUser = await supabase.auth.getSession();
  console.log(localUser.data.session);
  
  if (localUser.data.session == null){
    next('/Login')
  }
  else{
    next()
  }
}

router.beforeEach((to, from, next) =>{
  if(to.meta.requiresAuth){
    getUser(next);
  }
  else{
    next();
  }
})

export default router
