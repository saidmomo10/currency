<script setup lang="ts">
import MailIcon from './icons/MailIcon.vue';
import PassIcon from './icons/PassIcon.vue'
import {supabase} from '../clients/supabase.js'
import { ref } from 'vue';
import router from '@/router';


let email = ref('')
let password = ref('')

async function create() {
    const {data,error} = await supabase.auth.signUp({
        email: email.value,
        password: password.value
    })

    if(error){
        console.log(error)
    }
    else{
        console.log(data);
        router.replace('Login/LoginForm')
    }
}
</script>

<template>
    <form action="">
            <div class="mail">
                <div class="icon">
                    <MailIcon/>
                </div>
                <input type="text" placeholder="Votre mail" v-model="email">
            </div>
            <div class="mail">
                <div class="icon">
                    <PassIcon/>
                </div>
                <input type="text" placeholder="Votre mot de passe" v-model="password">
            </div>
        </form>
        <button @click = "create">Create</button>
</template>

<style scoped>
    form input{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40px;
        width: 250px;
    }

    form input::placeholder{
        font-weight: 900;
    }

    .mail{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
    }

    .icon{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        background: #f8ab40;
    }
</style>
