<template>
    <button @click="logout">SE DECONNECTER</button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import {supabase} from '@/clients/supabase'
    import router from '@/router';

    async function logout(){
    const{error} = await supabase.auth.signOut();

    if(error){
        console.log(error)
    }
    else{
        console.log('Déconnecté(e) avec succès');
        router.replace('/')
    }
}
</script>