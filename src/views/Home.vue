<script setup lang="ts">
import { ref } from 'vue';

// import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <main>

    <div class="banner">
            <div class="banner__top__left">
                <h1>Bienvenue sur Currency</h1>
                <h5>Votre plateforme de conversion de devises du monde entier</h5>
                <div class="banner__btn">
                    <a href="Login">SE CONNECTER</a>
                    <a href="SignUp">S'INSCRIRE</a>
                </div>
            </div>
            <div class="banner__top__right">

            </div>
        </div>
  </main>
</template>

<style scoped>
  main{
    height: 100vh;
    background: url(../assets/img/photo_5965392090617724475_y.jpg);
    background-size: cover;
  }

  .banner{
    display:flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 45px;
    align-items: center;
    text-align: center;
    height: 81.1vh;
    padding-top: 0px;
}

.banner__top__left{
    width: calc(100% - 450px);
    /* padding-left: 70px; */
    animation: gauche 2s ease-out;
}

@keyframes gauche{
    from{
        transform: translateX(-50%);
        opacity: 0;
    }
    to{
        transform: translate(0%);
        opacity: 1;
    }
}

.banner__top__left p{
    margin-top: 30px;
    font-size: 1.5rem;
    line-height: 3rem ;
    font-weight: 900;
}

.banner__top__left h1{
    font-size: 4rem;
    line-height: 5.5rem;
    white-space: wrap;
}

.toto{
    font-size: 4rem;
    line-height: 5.5rem;
    white-space: wrap;
}

.traofin{
    font-size: 4rem;
}

.banner__btn{
    display: flex;
    gap: 35px;
    margin-top: 60px;
    justify-content: center;
    text-align: center;
}

.banner__btn a{
    border: solid 1px rgb(141, 141, 141);
    padding: 10px 10px 10px 10px;
    color: #1c2e33;
    font-weight: 900;
}

.banner__btn a:hover{
    color: white;
    background-color: #1c2e33;
}

.banner__top__right img{
    width: 500px;
    animation: droite 3s ease-out;
}

@keyframes droite{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
</style>
