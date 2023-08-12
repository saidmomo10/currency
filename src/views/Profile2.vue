<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import {useUserStore} from '../stores/user'

import { storeToRefs } from 'pinia';

import { ref } from 'vue'
const {user} = storeToRefs(useUserStore())

</script>

<template>
  <NavBar/>
        <p>Bonjour {{use.name}}</p>
  <RouterView />
</template>

<style scoped>
    
</style>
