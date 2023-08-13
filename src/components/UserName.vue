<template>
    <p id="acount">{{ userEmail  }}</p>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import SignupForm from '../components/SignupForm.vue'
    import {supabase} from '@/clients/supabase'

    const userEmail = ref();
    getSession()
async function getSession(){
    const user = supabase.auth.getUser();
      if (user) {
        userEmail.value = (await user).data.user?.email.split("@")[0];
      }
}

console.log();


</script>