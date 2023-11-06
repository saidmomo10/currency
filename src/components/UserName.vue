<template>
    <p id="acount">{{ userdata.email.split("@")[0]  }}</p>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import router from '@/router';
    import axios from 'axios';


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
    age: '',
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

