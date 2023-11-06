import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import UserPage from '../views/UserPage.vue'
import CurrencyHistory from '../views/CurrencyHistory.vue'
import CurrencyPage from '../views/CurrencyPage.vue'
import History from '../views/History.vue'



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
      component: UserPage,
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
      path: '/CurrencyHistory',
      name: 'currencyHistory',
      component: CurrencyHistory,
      meta:{requiresAuth: true}
    },

    {
      path: '/CurrencyPage',
      name: 'currencyPage',
      component: CurrencyPage,
      meta:{requiresAuth: true}
    },

    {
      path: '/users/:email/history',
      component: History,
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('accessToken')) {
    next('/UserPage');
  } else {
    next();
  }
});

export default router
