<template>
    <p id="acount">{{ acount.data.session.user.email  }}</p>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import {supabase} from '@/clients/supabase'

    const acount = ref();
    getSession()
async function getSession(){
    acount.value = await supabase.auth.getSession();
}
getSession()

</script>