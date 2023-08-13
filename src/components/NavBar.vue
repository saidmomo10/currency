<script setup lang="ts">
import { ref } from 'vue';
import {supabase} from '@/clients/supabase'
import router from '@/router';
import UserName from './UserName.vue'
import LogoutButton from '../components/LogoutButton.vue';



</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <a class="header__logo" href="/UserPage">
                    <p>CURRENCY</p>
                </a>
                <ul class="header__menu">
                    <li class="header__menu__item"><a href="/UserPage">ACCUEIL</a></li>
                    <li class="header__menu__item"><a href="CurrencyHistory">CONVERTIR</a></li>
                    <li class="header__menu__item"><a href="CurrencyPage">TAUX RÉCENTS</a></li>
                    <li class="header__menu__item"><UserName/></li>
                    <li class="header__menu__item"><LogoutButton/></li>
                    <!-- <li class="header__menu__item"><a href="../connection.html">SE DECONNECTER</a></li> -->
                    <li class="mail"></li>
                </ul>
                <a href="#" class="btn-menu"><span></span></a>
            </div>
        </div>
    </header>
  <main>
    
  </main>
</template>

<style scoped>
    .header{
    z-index: 100;
    background: white;
    width: 100%;
    height: 100%;
    box-shadow: #e7e4e4 1px 1px 8px;
}

button{
  padding: 6px;
  border: #f8ab40 solid 1px;
  background: none;
  cursor: pointer;
}

button:hover{
  background: #f8ab40;
  color: #444854;
  border: #444854;
}
.header__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    flex-wrap: wrap;
    gap: 20px;
}

.header__logo p{
    color: #444854;
    font-size: 25px;
    display: block;
    font-weight: 900;
}

.header__menu{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-right: 0px;
}

.header__menu__item{
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header__menu__item a{
    color: #1c2e33;
    font-weight: 900;
}

.header__menu__item a:hover{
    color: #f8ab40;
}
</style>
