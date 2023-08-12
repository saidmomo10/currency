<script setup lang="ts">
import {useRouter} from 'vue-router';
import {useUserStore} from '../stores/user'

import NavBar from '@/components/NavBar.vue';
import { ref } from 'vue'

const {Age, userName, user, modifyUserName} = useUserStore()

const router = useRouter()
function gotoProfile2(){
  modifyUserName('toto')
  router.push('/Profile2')
  
}

</script>

<template>
  <NavBar/>
        <p>
          Bonjour {{ user.name }} <br>
          Vous êtes né en {{ Age }}
        
        </p>
        
        <button @click="gotoProfile2">ALLER</button>
  <RouterView />
</template>

<style scoped>
    
</style>
