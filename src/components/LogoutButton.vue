<template>
    <button @click="logout">Déconnexion</button>
</template>

<script setup lang="ts">
    import router from '@/router';
    const accessToken = localStorage.getItem('accessToken');
    async function logout(){
    
    localStorage.removeItem('accessToken');
    router.replace('/login');

}
</script>

<style scoped>
    button{
    border: solid 1px rgb(141, 141, 141);
    padding: 10px 10px 10px 10px;
    border-radius: 90px;
    color: white;
    font-weight: 900;
    background-color: #CC1E27;
    cursor: pointer;
}

button:hover{
  background: #B42B32;
  border: #444854;
}
</style>