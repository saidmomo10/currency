<script setup lang="ts">
import MailIcon from '../components/icons/MailIcon.vue';
import PassIcon from '../components/icons/PassIcon.vue'
import {supabase} from '../clients/supabase'

import { ref } from 'vue';
import router from '@/router';

let email = ref('')
let password = ref('')
const loginError = ref('')
let emailError = ref('');
let passwordError = ref('');

async function login() {
    clearErrors()
    if (!email.value) {
    emailError.value = 'Veuillez entrer votre adresse e-mail';
    return;
  }

  if (!password.value) {
    passwordError.value = 'Veuillez entrer votre mot de passe';
    return;
  }

    const {data,error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    const localUser = await supabase.auth.getSession();
    // console.log(localUser.data.session?.user.email)
    
    if(error){
        
        
        loginError.value = 'Email ou Mot de passe invalide'
        console.log(loginError.value)
    }
    else{
        console.log(data);
        router.replace('/UserPage')
    }
}
function clearErrors() {
  emailError.value = '';
  passwordError.value = '';
  loginError.value = '';
}
</script>

<template>
    <main>
        
        <div class="container">
            <h1>Connexion</h1>
            <div class="head">
                <p>CURRENCY</p>
                <p>La meilleure application de conversion de devises</p>
            </div>
            
            <div class="form__content">
                <div>
                    <form action="">
                        <div class="mail">
                            <div class="icon">
                                <MailIcon/>
                            </div>
                            <input type="text" placeholder="Votre mail" v-model="email">
                        </div>
                        <p class="login_error">{{ emailError }}</p>
                        <div class="mail">
                            <div class="icon">
                                <PassIcon/>
                            </div>
                            <input type="password" placeholder="Votre mot de passe" v-model="password">
                        </div>
                        <p class="login_error">{{ passwordError }}</p>
                        <p class="login_error">{{ loginError }}</p>
                    </form>
                    
                    <button @click = "login">Se connecter</button>
                </div>
            </div>
            <p class="bottom-text">Pas encore inscrit(e) ? Veuillez vous enregistrer <a href="SignUp">ici</a></p>
        </div>
    </main>
  <RouterView />
</template>

<style scoped>
    /* main{
        background: url(../assets/img/pexels-tima-miroshnichenko-6694543.jpg);
        background-size: cover;
        overflow: hidden;
    } */

    h1{
        text-align: center;
        font-size: 4rem;
        margin-top: 40px;
    }

    input{
        outline: none;
    }

    .head{
        display: flex;
        flex-direction: column;
        gap: 25px;
        text-align: center;
        margin-top: 25px;
    }

    .head p{
        color: #444854;
    font-size: 25px;
    display: block;
    font-weight: 900;
    }

    .form__content{
    background-color: #444854;
    padding: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: droite 1s ease-out;
}

@keyframes droite{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

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

    .login_error{
        color: #f8ab40;
    }

    .bottom-text{
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
    }

    .bottom-text a{
        color: #f8ab40;
        font-size: 20px;
    }

    button{
        border: solid 1px rgb(141, 141, 141);
        background: #f8ab40;
        padding: 10px 10px 10px 10px;
        border-radius: 10px;
        color: #444854;
        font-weight: 900;
        cursor: pointer;
        width: 100%;
    }

    button:hover{
        color: #f8ab40;
        background: #444854;
    }
</style>
