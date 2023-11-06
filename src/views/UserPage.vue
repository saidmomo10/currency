<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

import NavBar from '@/components/NavBar.vue';
import router from '@/router';

const clientHttp = axios.create(
    {
        baseURL: "http://localhost:3000/api/",
        headers: {
            Accept: "application/json",
        }
    }
)

const userdata = ref({
    email: '',
    password: '',
})

const accessToken = localStorage.getItem('accessToken');
console.log(accessToken);

const user = async ()=>{
    if (accessToken){
        try{
            const response = await clientHttp.get('/UserPage', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
      })
      console.log(response);
      
            if(response.status === 200){
                userdata.value.email = response.data.email
            }
        } catch(error){
            console.log(error);
            
        }
    } else{
        router.replace('/Login')
    }
}
user()

</script>

<template>
    <NavBar/>
    <main>
    <div class="banner">
            <div class="banner__top__left">
                    <h1>L'univers des devises <br> s'ouvre à vous</h1>
                    <div class="banner__btn">
                        <a href="CurrencyHistory">COMMENCER</a>
                    </div>
            </div>
            <div class="banner__top__right">
                <img src="../assets/img/coins-1015125_1280.png" alt="">
            </div>
        </div>
  </main>
</template>

<style scoped>
  main{
    height: 100vh;
    /* background: url(../assets/img/photo_5965392090617724475_y.jpg);
    background-size: cover; */
  }

  .banner{
    display:flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 45px;
    align-items: center;
    text-align: center;
    height: 100vh;
    padding-top: 0px;
    background-image: url(../assets/img/Pathimg.png);
    background-position: right;
    background-size: 700px;
    background-repeat: no-repeat;
}

.banner__top__left{
    width: calc(80% - 450px);
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
    border-radius: 90px;
    color: white;
    font-weight: 900;
    background-color: #505F98;
}

.banner__btn a:hover{
background-color: #5C699E;
;
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
