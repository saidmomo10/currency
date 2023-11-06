<script setup lang="ts">
import { ref } from 'vue';
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
                <ul>
                    <div class="header__menu">
                        <li class="header__menu__item"><a href="/UserPage">ACCUEIL</a></li>
                        <li class="header__menu__item"><a href="CurrencyHistory">CONVERTIR</a></li>
                        <li class="header__menu__item"><a href="/CurrencyPage">TAUX RÉCENTS</a></li>
                    </div>
                    <div class="header__menu">
                        <li class="header__menu__item"><UserName/></li>
                        <li class="header__menu__item"><LogoutButton/></li>
                    </div>
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

@import url('https://fonts.googleapis.com/css2?family=Griffy&family=Hanken+Grotesk&family=Mooli&family=Varela+Round&display=swap');
    .header{
    z-index: 100;
    background: white;
    width: 100%;
    height: 100px;
    padding-top: 20px;
    box-shadow: #e7e4e4 1px 1px 8px;
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
    font-size: 25px;
    font-weight: 500;
    font-family: "Griffy" ;
}

ul{
    display: flex;
    gap: 70px;
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
    color: #505F98;
    font-weight: 900;
}

.header__menu__item a:hover{
    color: #D47C00;
}
</style>
